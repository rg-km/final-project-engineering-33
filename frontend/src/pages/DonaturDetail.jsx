import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'

function DonaturDetail(){

    return(
        <>
            <Navbar/>
            <div className="container mx-auto px-5 py-5">        
                <img className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg px-5" src="./images/logo.png" alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">NAMA DONATUR</h5>
                </div>
                <hr />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe aut asperiores tenetur ea totam, eos inventore libero debitis alias recusandae! Quam praesentium voluptatibus tempore consectetur mollitia fuga sapiente natus blanditiis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe aut asperiores tenetur ea totam, eos inventore libero debitis alias recusandae! Quam praesentium voluptatibus tempore consectetur mollitia fuga sapiente natus blanditiis?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe aut asperiores tenetur ea totam, eos inventore libero debitis alias recusandae! Quam praesentium voluptatibus tempore consectetur mollitia fuga sapiente natus blanditiis?</p>
                <h5 className="mb-2 text-2xl font-bold tracking-tight ">8 juta</h5>            
            </div>

            <Footer/>
            
        </>
    )
}

export default DonaturDetail