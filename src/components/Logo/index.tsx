import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.scss'

import ILogoProps from './ILogoProps.ts';

const Logo: React.FunctionComponent<ILogoProps> = props => {

    const navigate = useNavigate();

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
        <div className='logo-container' onClick={() => navigate('/')}>
            <img className={props.className} src={imageSrc} alt='Nailed Icon' width={width} />
            {props.appName ? <h3 className='logo-text'>Nail'd</h3> : null}
        </div>
    )
}

export default Logo;