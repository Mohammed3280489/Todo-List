import React from 'react';
import classes from './cover.module.css';

const Cover = (props) => { 

    return (
        <div className = {classes.cover}>
            {props.children}
        </div>
    );
}
export default Cover ; 