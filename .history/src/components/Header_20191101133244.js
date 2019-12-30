// import React from 'react';

// export default (props)=> {
//     return (
//         <div style={{width: `100%`, height: `80px`, backgroundColor:`green`}}>
//             <h1>{props.title}</h1>
//         </div>
//     );
// }

import React from 'react';
import HeaderStles from './Header.module.css'

const Header = (props) => {
    return (
        <div style={{width: `100%`, height: `80px`, backgroundColor:`green`}}>
            <h1>{props.title}</h1>
        </div>
    );
};

export default Header;