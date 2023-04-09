import React,{Component} from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { withStyles } from "@mui/material/styles";

const defaultToolbarSelectStyles = {
  iconButton: {
    marginRight: "24px",
    top: "50%",
    display: "inline-block",
    position: "relative",
    transform: "translateY(-50%)",
  },
  deleteIcon: {
    color: "#000",
  },
};

type ToolbarProps = { 
  selectedRows:any,
  onRowsDelete:any
};

type ToolbarState = {
  dlgEliminar:boolean
};

class EmpresasToolbarSelect extends Component<ToolbarProps, ToolbarState> {

  state:ToolbarState = {
    dlgEliminar:false
  };

  constructor(props){
    super(props);
  }

  ClickEditar = () => {
    //console.log("click!", this.props.selectedRows); // a user can do something with these selectedRow values
  }

  ClickEliminar = () => {
    this.setState(state =>({dlgEliminar: true}));
  }

  CerrarDlgEliminar = () => {
    this.setState(state =>({dlgEliminar: false}));
  }

  ConfirmacionEliminar = () => {
    this.props.onRowsDelete(this.props.selectedRows);
  }

  render() {
    //const {classes} = this.props;

    return (
      <>
        <div className={"custom-toolbar-select"}>
          <Tooltip title={"Editar"}>
            <IconButton onClick={this.ClickEditar}>
              <EditIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title={"Eliminar"}>
            <IconButton onClick={this.ClickEliminar}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </div>
        <Dialog open={this.state.dlgEliminar} onClose={this.CerrarDlgEliminar} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
          <DialogTitle id="alert-dialog-title">
            {"Eliminar Usuario"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              ¿Desea eliminar de forma permanente el usuario actual?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.CerrarDlgEliminar}>Cerrar</Button>
            <Button onClick={this.CerrarDlgEliminar} autoFocus>
              Aceptar
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }

}

//export default withStyles(defaultToolbarSelectStyles, { name: "CustomToolbarSelect" })(CustomToolbarSelect);
export default EmpresasToolbarSelect;