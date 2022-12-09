import React from 'react'

import HeroBanner from "../components/HeroBanner";
import {Product} from "../components/Product";
import FooterBanner from "../components/FooterBanner";

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
