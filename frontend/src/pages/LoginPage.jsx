import React, { Component } from 'react';
import '../App.css';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';

export default function LoginPage() {
    return (
        <>

            <section >
                <div className="min-h-screen flex justify-center bg-cyan-800 p-14">
                    {/* FORM LOGIN */}
                


                    <div class="p-8 bg-white rounded-lg">
                        <div className="px-8">
                            <img src="/images/logo3.png" className="w-80 px-8 pl-8" />
                        </div>
                        <div class="text-center mb-10">
                            <h1 class="font-bold text-4xl text-gray-900">LOGIN</h1>
                            <p>Login Your Account</p>
                        </div>
                        <div>
                            <div class="flex -mx-3">
                                <div class="w-full mb-5">
                                    <label for="" class="text-xs font-semibold px-1">Email</label>
                                    <div class="flex">
                                        <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                        <input type="email" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="johnsmith@example.com" />
                                    </div>
                                </div>
                            </div>
                            <div class="flex -mx-3">
                                <div class="w-full mb-5">
                                    <label for="" class="text-xs font-semibold px-1">Password</label>
                                    <div class="flex">
                                        <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                        <input type="password" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="************" />
                                    </div>
                                </div>
                            </div>
                            <label for="" class="text-xs font-semibold px-1">Role</label>
                            <div className="mb-5 text-center  flex items-center justify-center pl-9 -mx-7">
                                <select class="w-full -ml-10 pl-11 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500 " aria-label="Default select example">
                                    <option selected value="1">Donatur</option>
                                    <option value="2">Mahasiswa</option>
                                </select>
                            </div>
                            <div class="flex -mx-3">
                                <div class="w-full px-3 mb-5">
                                    <button class="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">SIGN IN</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}