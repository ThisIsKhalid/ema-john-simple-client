import React, { useContext } from 'react';
import { AuthContext } from '../../context/UserContext';

const About = () => {

    const {user} = useContext(AuthContext);

    return (
        <div>
            <span>{user?.email}</span>
            <h2>Secret about us!!!</h2>
        </div>
    );
};

export default About;