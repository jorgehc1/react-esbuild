import React from "react";
import {useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserDoctor,faUsersBetweenLines,faBookMedical,faStaffAesculapius,faSyringe} from "@fortawesome/free-solid-svg-icons";
import {grey} from "@mui/material/colors";
import Typography from '@mui/material/Typography';
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import Tooltip from "@mui/material/Tooltip";

const SecondaryMenu = () => {
  const navigate = useNavigate();
  
  const navegarUsuarios = () => {
    navigate("/usuarios", {replace:false});
  }
  
  const navegarClientes = () => {
    navigate("/clientes", {replace:false});
  }

  const navegarHistoriasMedicas = () => {
    navigate("/historias/medicas", {replace:false});
  }

  const navegarExamenesMedicos = () => {
    navigate("/examenes/medicos", {replace:false});
  }

  const navegarInmunizaciones = () => {
    navigate("/inmunizaciones", {replace:false});
  }

  return(
  <>
    <Paper sx={{display:"flex",mt:"4rem",bgcolor:grey[200]}}>
      <Typography component="span" onClick={navegarUsuarios}>
        <Tooltip title="Usuarios" arrow>
          <Avatar alt="Usuarios" variant="rounded" sx={{ml:"0.25em",mr:"0.25em",color:"#1665C0",bgcolor:"transparent"}}>
            <FontAwesomeIcon icon={faUserDoctor} size="lg" />
          </Avatar>
        </Tooltip>
      </Typography>
      <Typography component="span" onClick={navegarClientes}>
        <Tooltip title="Clientes" arrow>
            <Avatar alt="Clientes" variant="rounded" sx={{ml:"0.25em",mr:"0.25em",color:"#1665C0",bgcolor:"transparent"}}>
                <FontAwesomeIcon icon={faUsersBetweenLines} size="lg"/>
            </Avatar>
        </Tooltip>
      </Typography>
      <Typography component="span" onClick={navegarHistoriasMedicas}>
        <Tooltip title="Historias Médicas" arrow>
            <Avatar alt="Historias Médicas" variant="rounded" sx={{ml:"0.25em",mr:"0.25em",color:"#1665C0",bgcolor:"transparent"}}>
              <FontAwesomeIcon icon={faBookMedical} size="lg"/>
            </Avatar>
        </Tooltip>
      </Typography>
      <Typography component="span" onClick={navegarExamenesMedicos}>
        <Tooltip title="Exámenes Complementarios" arrow>
          <Avatar alt="Exámenes Complementarios" variant="rounded" sx={{ml:"0.25em",mr:"0.25em",color:"#1665C0",bgcolor:"transparent"}}>
            <FontAwesomeIcon icon={faStaffAesculapius} size="lg"/>
          </Avatar>
        </Tooltip>
      </Typography>
      <Typography component="span" onClick={navegarInmunizaciones}>
        <Tooltip title="Inmunizaciones" arrow>
          <Avatar alt="Inmunizaciones" variant="rounded" sx={{ml:"0.25em",mr:"0.25em",color:"#1665C0",bgcolor:"transparent"}}>
            <FontAwesomeIcon icon={faSyringe} size="lg"/>
          </Avatar>
        </Tooltip>
      </Typography>
    </Paper>
  </>
  );
}

export default SecondaryMenu;