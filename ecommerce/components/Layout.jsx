import React from 'react'
import Head from 'next/head';
import NavBar from './Navbar';
import Footer from './Footer';

const Layout = ({children}) => {
  return (
    <div className='Layout'>
      <Head>
        <title>PRUEBA STORE</title>
      </Head>
      <header>
        <NavBar />
      </header>
      <main>
        {children}
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default Layout