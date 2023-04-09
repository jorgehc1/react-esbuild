import {setRoleData} from "./Roles";
export const isBrowser = () => typeof window !== "undefined";
const value = window.localStorage.getItem("kinnemedUser");
export const getUser = () => isBrowser() && value ? JSON.parse(value): {}
const setUser = (user: {id?: any; perfiles?: any; ocupacion?: any; sexo?: any; pais?: any; empresa?: any; orientacion_sexual?: any; primer_nombre?: any; segundo_nombre?: any; primer_apellido?: any; segundo_apellido?: any; fecha_nacimiento?: any; estado_civil?: any; tipo_documento?: any; identificacion?: any; correo?: any; contrasena?: any; telefono?: any; foto?: any; firma?: any; activo?: any; }) => window.localStorage.setItem("kinnemedUser", JSON.stringify(user));

export const setSessionData = (id,perfiles,ocupacion,sexo,pais,empresa,orientacion_sexual,primer_nombre,segundo_nombre,primer_apellido,segundo_apellido,fecha_nacimiento,estado_civil,tipo_documento,identificacion,correo,contrasena,telefono,foto,firma,activo) => {
    return setUser({id,perfiles,ocupacion,sexo,pais,empresa,orientacion_sexual,primer_nombre,segundo_nombre,primer_apellido,segundo_apellido,fecha_nacimiento,estado_civil,tipo_documento,identificacion,correo,contrasena,telefono,foto,firma,activo});
}

export const isAuthenticated = () => {
    const user = getUser();
    return !!user.correo;
}

export const logout = callback => {
    setUser({});
    setRoleData([]);
    localStorage.removeItem("kinnemedUser");
    callback();
}