import React from "react";
import {Navigate} from "react-router-dom";
import {isAuthenticated} from "../services/Auth";
import {getRoleData,isAuthorized} from "../services/Roles";

const withRoles = (Component,privilegios=[]) => {
  //comparar esto con la autenticacion de el usuario, denegar acceso si no tiene el role o privilegio

  const AuthRoute = () => {
    //consultar con graphql 
    
    if(isAuthenticated() === true){
      if(isAuthorized(privilegios) === false){
        return <Navigate to="/403" />;
      }
      return <Component />;
    }else{
      return <div>Forbidden</div>;
    }
  };
  
  return AuthRoute;
};

export default withRoles;