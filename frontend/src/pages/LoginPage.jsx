import React, { Component } from 'react';
import '../App.css';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';

export default function LoginPage() {
    return (
        <>
<<<<<<< HEAD
            <section className="flex justify-center bg-cyan-800">
                <div>
                    <div className="md:container md:mx-auto">
                        <div className="flex-initial w-128 p-8 container mx-auto">
                            <h2 className="text-4xl pb-9 pt-6 font-bold text-white">
                                The Best Way to Find Your Scholarship!
                            </h2>
                            {/* <img src="/images/" className="w-60" /> */}
                        </div>

                    </div>

                    {/* FORM LOGIN */}
                    <div class="w-full  py-6 px-5 pb-5 md:px-8 bg-white rounded-lg">
                        <div className="px-8">
                            <img src="/images/logo3.png" className="w-80 px-8 pl-8" />
                        </div>
                        <div class="text-center mb-10">
                            <h1 class="font-bold text-4xl text-gray-900">LOGIN</h1>
                            <p>Login Your Account</p>
                        </div>
                        <div>
                            <div class="flex -mx-3">
                                <div class="w-full px-3 mb-5">
                                    <label for="" class="text-xs font-semibold px-1">Email</label>
                                    <div class="flex">
                                        <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                        <input type="email" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="johnsmith@example.com" />
                                    </div>
                                </div>
                            </div>
                            <div class="flex -mx-3">
                                <div class="w-full px-3 mb-12">
                                    <label for="" class="text-xs font-semibold px-1">Password</label>
                                    <div class="flex">
                                        <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                        <input type="password" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="************" />
                                    </div>
                                </div>
                            </div>
                            <div class="flex -mx-3">
                                <div class="w-full px-3 mb-5">
                                    <button class="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">SIGN IN</button>
                                </div>
                            </div>
                        </div>
=======
            <Navbar/>
            <div className='grid grid-cols-2'>
                <div className='bg-cyan-800'>
                    <img src="/images/logo.png" className='w-' alt="" />
                    <p className='font-semibold text-white'>The Best Way to Find Your Scholarship</p>
                </div>
                <div className='border-solid bg-white rounded-md'>
                    <div className="flex justify-around font-semibold text-black">
                        <a href="">Masuk</a>
                        <a href="">Daftar</a>
>>>>>>> 6aec007818a33623a77b32cf9b600533857f4903
                    </div>
                </div>
            </section>
        </>
    )
}