import React from 'react';
import { useNavigate } from 'react-router-dom';

import ILogoProps from './ILogoProps.ts';

const Logo: React.FunctionComponent<ILogoProps> = props => {

    let navigate = useNavigate();

    const imageSrc = '/assets/nail_dark.svg';
    let width = '50px';

    switch (props.size) {
        case 'large':
            width = '150px';
            break;
        case 'medium':
            width = '100px';
            break;
        // small is default
        default:
            break;
    }

    return (
        <img className={props.className} src={imageSrc} alt='Nailed Icon' width={width} onClick={() => navigate('/')} />
    )
}

export default Logo;