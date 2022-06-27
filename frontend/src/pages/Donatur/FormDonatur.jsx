import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';

//nyambung ke component beasiswa card
function FormDonatur(){
    return(
        <div className='bg-indigo-100 h-fill w-full'>
            <Navbar/>
            <div className="flex justify-center gap-3 mb-5 mt-5">
                <p className='font-semibold text-2xl'>Daftarkan Beasiswamu Disini</p>
            </div>

            <div className="mb-10"> 
                <div className='mx-10 mb-5'>
                    <p className='mb-3'>Logo Beasiswa</p>
                    <input type="file" className='border rounded-sm border-gray-400 w-full'/>
                </div>   
                <div className='mx-10 mb-5'>
                    <p className='mb-3'>Nama Beasiswa</p>
                    <input type="text" placeholder='Beasiswa ABCD' className='px-3 border rounded-sm border-gray-400 w-full'/>
                </div>
                <div className="mx-10 mb-5">
                    <p>Deskripsi Beasiswa</p>
                    <input type="date" placeholder='Nama Lengkap' className='px-3 border rounded-sm border-gray-400 w-full'/>
                </div>
                <div className="mx-10 mb-5">
                    <p>Nominal Beasiswa</p>
                    <input type="number" placeholder='nominal' className='px-3 border rounded-sm border-gray-400 w-full'/>
                </div>
                <div className='mx-10 mb-5'>
                    <p>Persyaratan</p>
                    <input type="text" placeholder='' className='px-3 border rounded-sm border-gray-400 w-full'/>
                </div>    
                <div className="mx-10 mb-5">
                    <p>Alamat Perusahaan</p>
                    <input type="text" placeholder='Alamat Lengkap' className='px-3 border rounded-sm border-gray-400 w-full'/>
                </div>
                <div className="flex justify-center">
                    <button className='bg-blue-500 text-white font-medium rounded-md py-2 px-12'>Submit</button>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default FormDonatur;