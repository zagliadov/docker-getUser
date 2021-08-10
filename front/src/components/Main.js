import React from 'react';
import { Link } from 'react-router-dom';

export const Main = () => {

    return (
        <ul className="menu">
            <li>
                <Link to='/'>Main</Link>
            </li>
            <li>
                <Link to='/users'>Users</Link>
            </li>
        </ul>
    )
}