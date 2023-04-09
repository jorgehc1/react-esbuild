import React,{Component} from "react";
import SecondaryMenu from "./../components/SecondaryMenu";
import Layout from "../components/Layout";

class Inicio extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return(
        <Layout>
            <SecondaryMenu/>
            <h1>Home</h1>
        </Layout>
        );
    }
}

export default Inicio;