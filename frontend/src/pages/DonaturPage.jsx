import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'

function DonaturPage() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <Navbar />
            <div className="md:2xl">
                <div className="flex justify-center">
                    <div className="w-full">
                        <div className="container mx-auto px-5 py-5">
                            <a href="{donatur}" className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row hover:bg-gray-200">
                                <Link
                                    to='/donatur1'
                                    className='nav-links'
                                    onClick={closeMobileMenu}
                                >
                                    <img className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg px-5" src="./images/logo.png" alt="" />
                                    <div className="flex flex-col justify-between p-4 leading-normal">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">NAMA DONATUR</h5>
                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat alias nulla omnis provident deleniti impedit numquam. Dolore a, aperiam deleniti nihil alias obcaecati fugit nam molestias modi natus recusandae adipisci!</p>
                                    </div>
                                </Link>
                            </a>
                        </div>

                        <div className="container mx-auto px-5 py-5">
                            <a href="{donatur}" className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row hover:bg-gray-200">
                                <Link
                                    to='/donatur1'
                                    className='nav-links'
                                    onClick={closeMobileMenu}
                                >
                                    <img className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg px-5" src="./images/logo.png" alt="" />
                                    <div className="flex flex-col justify-between p-4 leading-normal">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">NAMA DONATUR</h5>
                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat alias nulla omnis provident deleniti impedit numquam. Dolore a, aperiam deleniti nihil alias obcaecati fugit nam molestias modi natus recusandae adipisci!</p>
                                    </div>
                                </Link>
                            </a>
                        </div>

                        <div className="container mx-auto px-5 py-5">
                            <a href="{donatur}" className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row hover:bg-gray-200">
                                <Link
                                    to='/donatur1'
                                    className='nav-links'
                                    onClick={closeMobileMenu}
                                >
                                    <img className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg px-5" src="./images/logo.png" alt="" />
                                    <div className="flex flex-col justify-between p-4 leading-normal">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">NAMA DONATUR</h5>
                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat alias nulla omnis provident deleniti impedit numquam. Dolore a, aperiam deleniti nihil alias obcaecati fugit nam molestias modi natus recusandae adipisci!</p>
                                    </div>
                                </Link>
                            </a>
                        </div>
                    </div>
                    <div class="flex items-center justify-center ">
                        <div class="px-8 py-6 mt-4 text-left bg-cyan-800 shadow-lg rounded-lg">
                            <h3 class="text-2xl font-bold text-center text-white">Login sebagai Donatur</h3>
                            <form action="">
                                <div class="mt-4">
                                    <div>
                                        <label class="block text-white" for="email">Email</label>
                                        <input type="text" placeholder="Email" class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                                    </div>
                                    <div class="mt-4">
                                        <label class="block">Password</label>
                                        <input type="password" placeholder="Password" class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                                    </div>
                                    <div class="flex items-baseline justify-end">
                                        <Link
                                            to='/donaturprofile'
                                            onClick={closeMobileMenu}
                                        >
                                            <button class="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Login</button>
                                        </Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>


                </div>
            </div>
            <Footer />

        </>
    )
}

export default DonaturPage