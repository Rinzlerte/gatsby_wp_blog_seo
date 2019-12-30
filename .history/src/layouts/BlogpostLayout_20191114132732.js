import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

// style={{height:`${window.innerHeight}px`, width: `100%`}}
const PrimaryLayout = (props) => {
    return (
        <div >
            <Header title="TESEJZ LOGO"/>
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className={props.column}>
                        {props.children}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default PrimaryLayout;