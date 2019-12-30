import React from "react";
import {Link} from "gatsby";
import PrimaryLayout from "../"
import Post from "../components/Post";

export default () => {
    return(
        <div>
            <Header title="TESEJZ HEADER FTW"/>
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col-xs-6">
                        <Post title="our first post" except="lorem dssddsddsfdsfsdf fddsfff fsfsfsdf"/>
                        <Post title="our first post" except="lorem dssddsddsfdsfsdf fddsfff fsfsfsdf"/>
                        <Post title="our first post" except="lorem dssddsddsfdsfsdf fddsfff fsfsfsdf"/>
                        <Post title="our first post" except="lorem dssddsddsfdsfsdf fddsfff fsfsfsdf"/>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
