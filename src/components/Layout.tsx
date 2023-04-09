import React from "react";
import Footer from "./Footer";
import PrimaryMenu from "./PrimaryMenu";

const Layout = ({children}) => (
    <>
        <PrimaryMenu/>
        {children}
        <Footer/>
    </>
  )

export default Layout;