import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import {BsBagCheckFill} from'react-icons/bs';
import {userRouter} from 'next/router';
import {useStateContext} from '../context/StateContext';
import { runFireworks } from '../lib/utils';

const Success = () => {
    const {setCartItems, setTotalPrice, setTotalQuantities} = useStateContext();

    useEffect(() =>{
        localStorage.clear();
        setCartItems([]);
        setTotalPrice(0);
        setTotalQuantities(0);
        runFireworks();
    }, []);

  return (
    <div className='success-wrapper'>
        <div className='success'>
            <p className='icon'>
                <BsBagCheckFill/>
            </p>
            <h2>Gracias por tu compra!</h2>
            <p className='email-msg'>
                Checa tu bandeja de entrada del email por el recibo.
            </p>
            <p className='description'>
                Si tiene alguna duda escribenos al <a className='email' href='mailto:mig.ang737@gmail.com'>mig.ang737@gmail.com</a>
            </p>
            <Link href="/">
            <button type="button" width="300px" className='btn'>
                Seguir Comprando
            </button>
            </Link>
        </div>
    </div>
  )
}

export default Success