import React from 'react';

import React from 'react';

const PrimaryLayout = (props) => {
    return (
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
};

export default PrimaryLayout;