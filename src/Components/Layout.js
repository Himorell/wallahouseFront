import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout =() => {
    return (
        <>
        {/* <Navigation/> */}
        <main>
            <Outlet/>
        </main>
        </>
    )
}

export default Layout;