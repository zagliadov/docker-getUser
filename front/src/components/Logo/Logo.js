import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import classes from './logo.module.sass';


const Logo = () => {
    return (
            <h1>
               <Link to='/' className={classes.link}>Logo</Link> 
            </h1>
    );
};

export default Logo;