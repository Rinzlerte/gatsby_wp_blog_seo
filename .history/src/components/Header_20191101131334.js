import React from 'react'

export default Header =(props)=> {
    return (
            <div style={{width: `100%`, height: `80px`, backgroundColor:`green`}}>
                <h1>{props.title}</h1>
            </div>
    );
}

import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
