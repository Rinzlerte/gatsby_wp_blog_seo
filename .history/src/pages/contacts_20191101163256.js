import React from "react";
import {Link} from "gatsby";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default () => {
    return(
        <div>
            <Header/>
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col-xs-6">
                        <h1>CONTACT US</h1>
                        <p>Lorem   sdsffsdf
                        sdsdfsdfsdf.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}