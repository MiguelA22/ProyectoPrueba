import React from 'react'

import {Product, HeroBanner, FooterBanner} from '../components';

export const Home = () => {
  return (
    <div>
      <HeroBanner />
      <div className='products-heading'>
        <h2>Best Sellers</h2>
        <p>Best sellers products</p>
      </div>

      <div className='products-container'>
        {['Product 1','Product 2'].map((product) => product)}
      </div>

      <FooterBanner  />
    </div>
  )
}
export default Home;