import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext, useEffect } from "react";

import {
  DashboardPage,
  LoginPage,
  RegisterPage,
  ForgetPasswordPage,
} from "../pages";

import { AuthContext } from "../contexts/authContext";
import { getCookie } from "../utils/cookieUtil";

export default function Routing() {
  const { authState, setAuthState } = useContext(AuthContext);
  const RoutePermitte = ({ children }) => {
    useEffect(() => {
      if (getCookie("token")) {
        setAuthState(true);
      } else {
        setAuthState(false);
      }
    }, []);

    if (!authState) {
      return <Navigate to="/login" replace />;
    }
    return children;
  };

  const RouteOmit = ({ children }) => {
    useEffect(() => {
      if (getCookie("token")) {
        setAuthState(true);
      } else {
        setAuthState(false);
      }
    }, []);
    if (authState) {
      return <Navigate to="/" replace />;
    }
    return children;
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <RoutePermitte>
                <DashboardPage />
              </RoutePermitte>
            }
          />
          <Route
            path="/login"
            element={
              <RouteOmit>
                <LoginPage />
              </RouteOmit>
            }
          />
          <Route
            path="/register"
            element={
              <RouteOmit>
                <RegisterPage />
              </RouteOmit>
            }
          />
          <Route
            path="/forget_password"
            element={
              <RouteOmit>
                <ForgetPasswordPage />
              </RouteOmit>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
