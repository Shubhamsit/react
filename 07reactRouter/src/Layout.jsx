import React from 'react'
import {Outlet} from 'react-router-dom' // will use this Layout as a base and additionally will add yhe components you give

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function Layout() {
    return (
        <>

            <Header />
            <Outlet/>
            <Footer />
        </>

    )
}

export default Layout