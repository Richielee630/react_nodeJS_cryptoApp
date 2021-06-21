import React from 'react';
import './Loading.css'

const Loading = () => {
    return (
        <div className="wrap-loader">
            <div className="lds-ripple">
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Loading;
