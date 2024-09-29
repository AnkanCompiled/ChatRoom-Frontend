import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import {
  DashboardPage,
  LoginPage,
  RegisterPage,
  ForgetPasswordPage,
} from "../pages";

import { isAuthinticated } from "../auth";

const RoutePermitte = ({ children }) => {
  if (!isAuthinticated()) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default function Routing() {
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
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forget_password" element={<ForgetPasswordPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
