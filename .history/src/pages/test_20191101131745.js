import React from 'react';
import {navigate} from "gatsby";
import Header from "../components/Header";
 
const Test = ()=> (
    <div>
        <Header />
        <h1>My Test Page</h1>
        <button onClick={(e)=>navigate("/")}>GO to MAin</button>
    </div>
   
)

export default Test;