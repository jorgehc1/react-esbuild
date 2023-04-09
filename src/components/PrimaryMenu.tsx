import React,{useState} from "react";
import {useLocation} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDoorOpen,faGear,faUserTie} from "@fortawesome/free-solid-svg-icons";
import AppBar from "@mui/material/AppBar";
import Divider from "@mui/material/Divider";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import {isAuthenticated,logout,getUser} from "./../services/Auth";

import logo01 from "./../images/logo01.png";

const PrimaryMenu = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);

  const primer_nombre = getUser().primer_nombre;
  const primer_apellido = getUser().primer_apellido;

  const cerrarSesion = () => {
      logout(() =>{
          navigate("/login", {replace: true});
      });
  }

  const abrirMenuLogin = (event) => {
      setAnchorEl(event.currentTarget);
  }

  const cerrarMenuLogin = () => {
      setAnchorEl(null);
  }

  const navegarIniciarSesion = () => {
      navigate("/login", {replace: true});
  }

  const navegarRegistro = () => {
      navigate("/registro", {replace:true});
  }

  const navegarSeccionInicio = () => {
      navigate("/", {replace:false});
  }

  const navegarMiPerfil = () => {
      navigate("/mi-perfil", {replace:false});
  }

  const navegarMiCuenta = () => {
      navigate("/mi-cuenta", {replace:false});
  }

  const navegarConfiguraciones = () => {
      navigate("/configuraciones", {replace:false});
  }

  //console.log(location.pathname);

  return(
  <>
    <AppBar position="fixed" color={isAuthenticated() === true ? "inherit": "transparent"} elevation={0}>
      <Toolbar>
        <img src={logo01} width="160" />
        <Typography component="div" sx={{ flexGrow: 1 }}>
            {isAuthenticated() === true && (
                <div>
                    <Button aria-controls="menu-inicio" onClick={navegarSeccionInicio} color="inherit">
                        Inicio
                    </Button>
                </div>
            )}
            {isAuthenticated() === true && (
            <div>
                <IconButton size="large" aria-label="Cuenta de Usuario" aria-controls="menu-cuenta-usuario" aria-haspopup="true" onClick={abrirMenuLogin} color="inherit">
                    <Typography>
                        {primer_nombre} {primer_apellido}
                    </Typography>
                    <FontAwesomeIcon icon={faUserTie} size="sm" color="#0275D8"/>
                </IconButton>
                <Menu id="menu-cuenta-usuario" anchorEl={anchorEl} anchorOrigin={{vertical: 'top',horizontal: 'right',}} keepMounted transformOrigin={{vertical: 'top',horizontal: 'right',}} open={Boolean(anchorEl)} onClose={cerrarMenuLogin}>
                    {/*<MenuItem onClick={navegarMiPerfil}><AccountCircleIcon/> Mi Perfil</MenuItem>*/}
                    <MenuItem onClick={navegarMiCuenta}><FontAwesomeIcon icon={faGear} color="#0275D8"/>&nbsp;Mi Cuenta</MenuItem>
                    <Divider />
                    <MenuItem onClick={navegarConfiguraciones}><FontAwesomeIcon icon={faGear} color="#0275D8"/>&nbsp;Configuraciones</MenuItem>
                    <MenuItem onClick={cerrarSesion}><FontAwesomeIcon icon={faDoorOpen} color="#0275D8"/>&nbsp;Cerrar Sesi&oacute;n</MenuItem>
                </Menu>
            </div>
            )}
            {isAuthenticated() === false && (
            <div>
                <Button color="inherit" onClick={navegarIniciarSesion}>Iniciar Sesi&oacute;n</Button>
                <Button color="inherit" onClick={navegarRegistro}>Registro</Button>
            </div>
            )}
        </Typography>
      </Toolbar>
    </AppBar>
  </>
  );
}

export default PrimaryMenu;