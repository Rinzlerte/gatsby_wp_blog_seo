import React from "react";
import {Link} from "gatsby";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Post from "../components/Post";

export default () => {
    return(
        <div>
            <Header title="MY HEADER FTW"/>
            <div className="container">
            <div className=></div>
                <Post />
            </div>
            <Footer />
        </div>
    );
}
