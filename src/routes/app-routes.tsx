import Dashboard from "@/pages/dashboard";
import Login from "@/pages/login";
import Register from "@/pages/register";
import OTPVerification from "@/pages/verifyOtp";
import { Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" Component={Login} />
      <Route path="/register" Component={Register} />
      <Route path="/dashboard" Component={Dashboard} />
      <Route path="/verify-otp" Component={OTPVerification} />
    </Routes>
  );
};

export default AppRoutes;
