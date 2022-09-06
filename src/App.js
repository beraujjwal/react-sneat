import React, { Suspense, useState, useEffect } from 'react'
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

const DefaultLayout = React.lazy(() => import('./layouts/DefaultLayout'));
const Login = React.lazy(() => import('./views/users/Login'));
const Register = React.lazy(() => import('./views/users/Register'));

function App() {

  const navigate = useNavigate();
  const location = useLocation();
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if(location.pathname === '/login') {
      localStorage.removeItem('userToken');
    }
    const token = localStorage.getItem('userToken');

    if (token) {
      setIsLogin(true)
    }
  })

  return (
      <Suspense fallback={loading}>
        { isLogin? (
            <Routes>
              <Route path="*" name="Home" element={<DefaultLayout />} />
            </Routes>
          ) : (
            <Routes>
              <Route exact path="/login" name="Login Page" element={<Login />} />
              <Route exact path="/register" name="Register Page" element={<Register />} />
            </Routes>
          )
        }
      </Suspense>
  );
}

export default App;
