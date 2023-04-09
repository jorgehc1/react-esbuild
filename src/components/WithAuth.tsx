import React from "react";
import {Navigate} from "react-router-dom";
import {isAuthenticated} from "../services/Auth";

const withAuth = (Component) => {
  const AuthRoute = () => {
    if(isAuthenticated() === true){
      return <Component />;
    }else{
      return <Navigate to="/login" />;
    }
  };
  return AuthRoute;
};

export default withAuth;