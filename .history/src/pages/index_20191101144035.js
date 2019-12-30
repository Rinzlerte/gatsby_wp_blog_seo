import React from "react";
import {Link} from "gatsby";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Post from "../components/Post";

export default () => {
    return(
        <div>
            <Header title="TESEJZ HEADER FTW"/>
            <div className="container">
            <div className="row justify-content-md-center">
                <div className="col-xs-6">
                    <Post title="our first post" exce/>
                </div>
            </div>
                
            </div>
            <Footer />
        </div>
    );
}
