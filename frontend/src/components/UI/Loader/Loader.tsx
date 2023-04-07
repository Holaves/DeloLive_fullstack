import React, { FC } from 'react';
import './Loader.css'

interface LoaderProps {
    size?: string;
    color?: string;
}

const Loader:FC<LoaderProps> = ({ size = 'medium', color = '#000000' }) => {
    return (
        <div className="loader_wrapper">
            <div className={`Loader Loader_${size}`}>
                <div className="Loader__circle" style={{ borderColor: color }}></div>
                <div className="Loader__circle" style={{ borderColor: color }}></div>
                <div className="Loader__circle" style={{ borderColor: color }}></div>
            </div>
        </div>
    );
};

export default Loader;