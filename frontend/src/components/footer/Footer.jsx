import React from 'react';
import '../../App.css';

export default function Footer(){
    return(
        <>
            <div className='bg-cyan-900'>
                <p className="font-medium text-2xl text-white flex justify-center mt-2 mb-2">Scholarship Center</p>
                <div className="flex justify-center">
                    <div className="flex justify-around gap-7 mb-3">
                        <img src='https://cdn-icons.flaticon.com/png/128/4923/premium/4923005.png?token=exp=1655656320~hmac=071d67d500a5600444e71bce2f2540a0' alt='' className='w-6'/>
                        <img src="https://cdn-icons-png.flaticon.com/128/3781/3781736.png" alt="" className='w-5 h-5'/>
                    </div>
                </div>
                <p className="text-sm text-white flex justify-center">2022 Copyright Scholarhsip Center. All Rights Reserved.</p>
            </div>
        </>
    )
}