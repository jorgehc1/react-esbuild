import React,{Component} from "react";
import {Route,Routes} from "react-router-dom";
import {createTheme,ThemeProvider} from "@mui/material/styles";

import Inicio from "./pages/Inicio";
import Error404 from "./pages/Error404";

let theme = createTheme({
    palette:{
        primary: {
            light: '#757ce8',
            main: '#3f50b5',
            dark: '#002884',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        },
    },
    typography: {
        h5: {
            fontWeight: 500,
            fontSize: 26,
            letterSpacing: 0.5,
        },
    },
    shape: {
        borderRadius: 8,
    },
    components: {
        MuiTab: {
            defaultProps: {
                disableRipple: true,
            },
        },
    },
    mixins: {
        toolbar: {
            minHeight: 48,
        },
    },
});

class App extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return(
        <ThemeProvider theme={theme}>
            <Routes>
                <Route path="/" element={<Inicio/>} />
                <Route path="*" element={<Error404/>} />
            </Routes>
        </ThemeProvider>
        );
    }
}

export default App;