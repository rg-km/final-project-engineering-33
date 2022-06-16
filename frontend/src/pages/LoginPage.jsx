import React, {Component} from 'react';
import '../App.css';
import Footer from '../components/footer/Footer';

export default function LoginPage(){
    return(
        <>
            <div className='grid grid-cols-2'>
                <div className='bg-cyan-800'>
                    <img src="/images/logo.png" className='w-' alt="" />
                    <p className='font-semibold text-white'>The Best Way to Find Your Scholarship</p>
                </div>
                <div className='border-solid bg-white rounded-md'>
                    <div className="flex justify-around font-semibold text-black">
                        <a href="">Masuk</a>
                        <a href="">Daftar</a>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}