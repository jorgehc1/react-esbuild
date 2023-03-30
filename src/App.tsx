import React,{Component} from 'react';
import {createTheme,ThemeProvider} from "@mui/material/styles";

let theme = createTheme({
    palette: {
        primary: {
            light: '#63ccff',
            main: '#009be5',
            dark: '#006db3',
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

    render(): React.ReactNode {
        return(
        <ThemeProvider theme={theme}>
            <h1>AAB</h1>
        </ThemeProvider>
        );
    }
}

export default App;