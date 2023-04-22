import React, { FC } from 'react';
import './Loader.css'

interface LoaderProps {
    width: number,
    height: number
}

const Loader:FC<LoaderProps> = ({ width, height }) => {
    return (
        <div className="img-loader-cont" style={{width: width, height: height}}>
            <img src='https://i.pinimg.com/originals/76/77/ed/7677edd5a44b10130b8824ca020ba60b.gif' alt='load'/>
        </div>
    );
};

export default Loader;