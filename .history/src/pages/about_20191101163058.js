import React from "react";
import {Link} from "gatsby";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Post from "../components/Post";

export default () => {
    return(
        <div>
            <Header/>
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col-xs-6">
                        <h1>ABOUT US</h1>
                        <p>Lorem   sdsffsdf
                        sdsdfsdfsdf
                        sdfsfsdfsd fsdf s sfs fsfsfsfs sfsfsfff.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
