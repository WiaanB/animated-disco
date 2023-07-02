import React from 'react';
import { Link } from 'react-router-dom';

import { IProfileProps } from './IProfileProps';

const Profile: React.FunctionComponent<IProfileProps> = () => {
    return (
        <div>
            <h1>My Profile</h1>
            <Link to="/">Go back home!</Link>
        </div>
    )
}

export default Profile;