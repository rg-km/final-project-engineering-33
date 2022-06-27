import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'

function DetailBeasiswa() {

    return (
        <>
            <Navbar />
            <div className="min-h-screen container mx-auto px-5 py-5">
                <div class="md:container md:mx-auto ">
                    <a href="#" class="mx-auto">
                        <img class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/1000x500?sig=1"/>
                    </a>
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">Nama Beasiswa</h5>
                    </div>
                    <hr />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe aut asperiores tenetur ea totam, eos inventore libero debitis alias recusandae! Quam praesentium voluptatibus tempore consectetur mollitia fuga sapiente natus blanditiis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe aut asperiores tenetur ea totam, eos inventore libero debitis alias recusandae! Quam praesentium voluptatibus tempore consectetur mollitia fuga sapiente natus blanditiis?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe aut asperiores tenetur ea totam, eos inventore libero debitis alias recusandae! Quam praesentium voluptatibus tempore consectetur mollitia fuga sapiente natus blanditiis?</p>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight ">8 juta</h5>
                </div>
            </div>

            <Footer />

        </>
    )
}

export default DetailBeasiswa