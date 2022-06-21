import React, {Component} from 'react';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';

export default function BeasiswaPage(){
        return(
            <>
                <Navbar/>
                <p className='text-2xl font-semibold mt-5 mb-5'>Beasiswa</p>
                <div className="flex justify-center">
                    <div className="mb-3 xl:w-full">
                        <div className="input-group relative flex items-stretch w-full mb-4 rounded-md">
                            <input type="search" 
                                className="form-control relative flex-auto 
                                min-w-0 block w-full px-3 py-1.5 text-base 
                                font-normal text-gray-700 bg-white bg-clip-padding 
                                border border-solid border-gray-300 rounded transition 
                                ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 
                                focus:outline-none" placeholder="Search" 
                                aria-label="Search" aria-describedby="button-addon2"
                            />
                            <span className="input-group-text flex items-center px-3 
                                py-1.5 text-base font-normal text-gray-700 text-center 
                                whitespace-nowrap rounded" id="basic-addon2"
                            >
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex justify-around">
                    <div>
                        <div className="flex gap-2">
                            <img className='w-5 h-5' src="./images/logo.png" alt="" />
                            <div className='max-w-xs'>
                                <p className='font-semibold text-medium'>Beasiswa mandiri</p>
                                <p className='desc text-gray-500 text-sm'>lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit amet</p>
                            </div>
                        </div>
                    </div>
                    <div>
                    <div className="flex gap-2">
                        <img className='w-5 h-5' src="./images/logo.png" alt="" />
                        <div className='max-w-xs'>
                            <p className='font-semibold text-medium'>Beasiswa mandiri</p>
                            <p className='desc text-gray-500 text-sm'>lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit amet</p>
                        </div>
                    </div>
                    </div>
                    <div className=""></div>
                </div>
                <Footer/>
            </>
        )
}