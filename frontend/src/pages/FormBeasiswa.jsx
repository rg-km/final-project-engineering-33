import React from 'react';
import '../App.css';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';

//nyambung ke component beasiswa card
function FormBeasiswa(){
    return(
        <div className='bg-indigo-100 h-fill w-full'>
            <Navbar/>
            <div className="flex justify-center gap-3 mb-5 mt-5">
                <img src="https://cdn-icons-png.flaticon.com/512/6559/6559442.png" className='w-8 h-8' alt="" />
                <p className='font-semibold text-2xl'>Isi Formulir Beasiswa</p>
                <img src="https://cdn-icons-png.flaticon.com/512/6559/6559442.png" className='w-8 h-8' alt="" />
            </div>

            <div className="">    
                <div className='mx-10 mb-5'>
                    <p className='mb-3'>Nama Lengkap</p>
                    <input type="text" placeholder='Nama Lengkap' className='border rounded-sm border-gray-400 w-full'/>
                </div>
                <div className="mx-10 mb-5">
                    <p>Tanggal Lahir</p>
                    <input type="date" placeholder='Nama Lengkap' className='border rounded-sm border-gray-400 w-full'/>
                </div>
                <div className='mx-10 mb-5'>
                    <p>Email</p>
                    <input type="email" placeholder='example@gmail.com' className='border rounded-sm border-gray-400 w-full'/>
                </div>    
                <div className="mx-10 mb-5">
                    <p>Asal universitas</p>
                    <input type="email" placeholder='Universitas' className='border rounded-sm border-gray-400 w-full'/>
                </div>
                <div className="mx-10 mb-5">
                    <p>Nomor Telepon</p>
                    <input type="email" placeholder='Nomor telepon' className='border rounded-sm border-gray-400 w-full'/>
                </div>
                <div className="mx-10 mb-5">
                    <p>Alamat Lengkap</p>
                    <input type="text" placeholder='Alamat Lengkap' className='border rounded-sm border-gray-400 w-full'/>
                </div>
                <div className="flex justify-center">
                    <button className='bg-blue-500 text-white font-medium rounded-md py-2 px-12'>Submit</button>
                </div>
            </div>
            
            <Footer/>
        </div>
    )
}

export default FormBeasiswa;