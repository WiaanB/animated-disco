import React from 'react';
import { Link } from 'react-router-dom';

import { IPageNotFoundProps } from './IPageNotFoundProps';

const PageNotFound: React.FunctionComponent<IPageNotFoundProps> = () => {
    return (
        <div>
            <h1>Page Not Found!</h1>
            <Link to="/">Go back home!</Link>
        </div>
    )
}

export default PageNotFound;