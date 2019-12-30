import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div style={{width: `100%`, height: `80px`, backgroundColor:`green`}}>
                <h1>{props}</h1>
            </div>
        )
    }
}
