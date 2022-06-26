import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'

function DonaturDetail(){

    return(
        <>
            <Navbar/>
            <div className="container mx-auto px-5 py-5">        
                <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
                    <div className="">
                        <img className="" src="./images/logo.png" alt="" />
                        <div className="">
                            <h2 className="text-4xl font-bold sm:text-6xl">
                                NAMA DONATUR
                            </h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe aut asperiores tenetur ea totam, eos inventore libero debitis alias recusandae! Quam praesentium voluptatibus tempore consectetur mollitia fuga sapiente natus blanditiis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe aut asperiores tenetur ea totam, eos inventore libero debitis alias recusandae! Quam praesentium voluptatibus tempore consectetur mollitia fuga sapiente natus blanditiis?</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe aut asperiores tenetur ea totam, eos inventore libero debitis alias recusandae! Quam praesentium voluptatibus tempore consectetur mollitia fuga sapiente natus blanditiis?</p>
                        </div>
                    </div>

                    <ul className="mt-8 border-2 border-white border-opacity-25 divide-y-2 divide-white sm:grid sm:divide-y-0 sm:divide-x-2 sm:border-l-0 sm:border-r-0 divide-opacity-25 sm:grid-cols-3">
                        <li className="p-8">
                            <p className="text-3xl font-extrabold">100+</p>
                            <p className="mt-1 text-xl font-medium">Mahasiswa Daftar</p>
                        </li>
                        <li className="p-8">
                            <p className="text-3xl font-extrabold">6</p>
                            <p className="mt-1 text-xl font-medium">Bulan</p>
                        </li>
                        <li className="p-8">
                            <p className="text-3xl font-extrabold">8</p>
                            <p className="mt-1 text-xl font-medium">Juta</p>
                        </li>
                    </ul>

                    <div className='flex items-center justify-end'>
                        <a className="flex items-center justify-end w-40 px-8 py-3 text-white bg-indigo-600 border border-indigo-600 rounded hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring" href="/download">
                            <span className="text-sm font-medium"> DAFTAR </span>
                            <svg className="w-5 h-5 ml-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <Footer/>
            
        </>
    )
}

export default DonaturDetail