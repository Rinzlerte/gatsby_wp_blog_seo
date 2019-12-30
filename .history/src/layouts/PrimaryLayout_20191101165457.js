import React from 'react';

import Header from "../components/Header";
import Footer from "../components/Footer";

const PrimaryLayout = (props) => {
    return (
        <div>
            <Header title="TESEJZ HEADER FTW"/>
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col-xs-6">
                        {props.children}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default PrimaryLayout;