import React from 'react'

const Header (props)=> {
    return (
            <div style={{width: `100%`, height: `80px`, backgroundColor:`green`}}>
                <h1>{props.title}</h1>
            </div>
    );
}
