import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import authStyle from './css/auth.module.css';
import { loginUser } from '../../server/actions/userAction';
import DefaultSpinner from "../../components/assets/spinner/DefaultSpinner";
import Logo from '../../Logo';

import Form from '../../components/elements/form/Form';

function Login() {
  const APP_NAME = process.env.REACT_APP_NAME;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const initialLoginState = {
    username: null,
    password: null
  };
  const [user, setUser] = useState(initialLoginState);

  const { loading, userInfo, error, success } = useSelector(
      (state) => state.user
  );

  useEffect(() => {
    console.log('userInfo', userInfo);
    if (userInfo) navigate('/dashboard')
  }, [navigate, userInfo, success]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async () => {

    console.log('Button Clicked!');
    try {
      
      await dispatch(loginUser(user)).unwrap();


    } catch (err) {
      setErrors(err);
      console.error('Failed to login: ', err)
      //toast.warning(err.message);
    } finally {

    }
  }
    return (
      <>
        {loading ? <DefaultSpinner /> : ''}
        <div className="container-xxl">
          <div className={`${authStyle.authenticationWrapper} ${authStyle.authenticationBasic} container-p-y`}>
            <div className={`${authStyle.authenticationInner}`}>
              {/* <!-- Register --> */}
              <div className={`${authStyle.card}`}>
                <div className="card-body">
                  {/* <!-- Logo --> */}
                  <div className={`${authStyle.appBrand} justify-content-center`}>
                    <Link to="/dashboard" className={`${authStyle.appBrandLink} gap-2`}>
                      <span className={`${authStyle.appBrandLogo} ${authStyle.demo}`}>
                        <Logo />
                      </span>
                      <span className={`${authStyle.appBrandText} ${authStyle.demo} text-body fw-bolder`}>{APP_NAME}</span>
                    </Link>
                  </div>
                  {/* <!-- /Logo --> */}
                  <h4 className="mb-2">Welcome to Sneat! 👋</h4>
                  <p className="mb-4">Please sign-in to your account and start the adventure</p>

                  <Form id="formAuthentication" className="mb-3">
                    <div className="mb-3">
                      <label htmlFor="username" className="form-label">Email or Phone</label>
                      <input
                        type="text"
                        className={"form-control " + (error?.data?.username ? 'is-invalid' : '')}
                        id="username"
                        name="username"
                        placeholder="Enter your email or phone"
                        onChange={handleInputChange}
                        autoFocus
                      />
                      <div className="invalid-feedback">{error?.data?.username}</div>
                    </div>
                    <div className="mb-3 form-password-toggle">
                      <div className="d-flex justify-content-between">
                        <label className="form-label" htmlFor="password">Password</label>
                        <a href="auth-forgot-password-basic.html">
                          <small>Forgot Password?</small>
                        </a>
                      </div>
                      <div className="input-group input-group-merge">
                        <input
                          type="password"
                          id="password"
                          className={"form-control " + (error?.data?.password ? 'is-invalid' : '')}
                          name="password"
                          placeholder="Password"
                          onChange={handleInputChange}
                          aria-describedby="password"
                        />
                        <span className="input-group-text cursor-pointer"><i className="bx bx-hide"></i></span>
                        <div className="invalid-feedback">{error?.data?.password}</div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="remember-me" />
                        <label className="form-check-label" htmlFor="remember-me"> Remember Me </label>
                      </div>
                    </div>
                    <div className="mb-3">
                      <button className="btn btn-primary d-grid w-100" type="button" onClick={handleSubmit}>Sign in</button>
                    </div>
                  </Form>

                  <p className="text-center">
                    <span>New on our platform?</span>
                    <Link to={`/register`}>
                        <span>Create an account</span>
                    </Link>
                  </p>
                </div>
              </div>
              {/* <!-- /Register --> */}
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Login;