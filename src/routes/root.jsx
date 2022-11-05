import { Fragment } from 'react';

import { Outlet } from 'react-router-dom';

import Footer from '../components/Footer';

const Root = () => {
    return (
        <Fragment>
            <div id='detail'>
                <Outlet/>
            </div>
            <Footer/>
        </Fragment>
    );
}

export default Root;