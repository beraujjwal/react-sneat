import React, { Suspense, useState, useEffect } from 'react'
import { Route, Routes, Redirect } from 'react-router-dom'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

const DefaultLayout = React.lazy(() => import('./layouts/DefaultLayout'));
const Login = React.lazy(() => import('./views/users/Login'));
const Register = React.lazy(() => import('./views/users/Register'));

function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
      <Suspense fallback={loading}>
        {isLogin? (
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
