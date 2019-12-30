import React from "react";
import {Link} from "gatsby";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default () => {
    return(
        <div>
            <Header title="MY HEADER FTW"/>
            <div className="container"></div>
            
            <Footer />
        </div>
    );
}
