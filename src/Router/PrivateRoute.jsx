import { Navigate } from "react-router-dom";

export default function PrivateRoute({ component: Component }) {
  return localStorage.getItem("tokenuser") ? Component : <Navigate to="/login" />;
}