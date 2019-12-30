import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Form} from 'react-bootstrap';


// cntl + f2 ==   selelects types elemetns on page
export default () => {
    return(
        <div>
            <Header/>
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col-10">
                    <div className="p-5"></div>
                        
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}