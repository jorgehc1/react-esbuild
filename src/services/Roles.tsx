export const isBrowser = () => typeof window !== "undefined";
const value = window.localStorage.getItem("kinnemedRoles");
export const getRole = () => isBrowser() && value ? JSON.parse(value): {};
const setRole = (role:any) => window.localStorage.setItem("kinnemedRoles", JSON.stringify(role));

export const setRoleData = (roles=[]) => {
    return setRole(roles);
}

export const getRoleData = () => {
    //tomar en cuenta para la busqueda, el id del usuario
    return getRole();
}

export const isAuthorized = (privilegios) => {
    //const roles = getRoleData();

    /*
    var permitido = privilegios.filter((p) =>{
        return roles.includes(p);
    });
    if(permitido.length === 0){
        return false;
    }else{
        return true;
    }*/

    return true;
}

export const canAccess = (privilegios) => {
    //const roles = getRoleData();
    /*
    var permitido = privilegios.filter((p) =>{
        return roles.includes(p);
    });
    if(permitido.length === 0){
        return false;
    }else{
        return true;
    }*/

    return true;
}