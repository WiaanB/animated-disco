import React from 'react';
import { Link } from 'react-router-dom';

import { ILoginProps } from './ILoginProps';

const Login: React.FunctionComponent<ILoginProps> = () => {
    return (
        <div>
            <h1>Login</h1>
            <Link to="/">Go back home!</Link>
        </div>
    )
}

export default Login;