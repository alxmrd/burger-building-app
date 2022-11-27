import { Outlet, Navigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
function isAuthenticated() {
  var isAuthenticated = false;
  const token = localStorage.getItem("token");
  let decodedToken = jwt_decode(token);
  let currentDate = new Date();
  if (decodedToken.exp * 1000 > currentDate.getTime()) {
    isAuthenticated = true;
  }
  return isAuthenticated;
}
const PrivateRoutes = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
