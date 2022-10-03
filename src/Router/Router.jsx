import {
  Routes,
  Route,
} from "react-router-dom";

import Home from "pages/Home";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password/:token" element={<ResetPassword />} />
      <Route path="/metricas" element={<PrivateRoute component={<Metricas />} />} />
      <Route path="/my-account" element={<PrivateRoute component={<MyAccount />} />} />
      <Route path="/superadmin" element={<SuperPrivateRoute component={<SuperadminPage />} />} /> */}

      <Route path="/*" element={<div>ERROR 404</div>} />
    </Routes>
  )
}