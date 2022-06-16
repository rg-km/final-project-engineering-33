import React from 'react';
import '../../App.css';

export default function Footer(){
    return(
        <>
            <div className='bg-cyan-900'>
                <p className="font-medium text-xl text-white flex justify-center">Scholarship Center</p>
                <div className="flex justify-center">
                    <div className="flex justify-around gap-5">
                        <img src='https://cdn-icons.flaticon.com/png/128/3621/premium/3621435.png?token=exp=1654871284~hmac=452afd159a96e0529ebed2b123474cf9' alt='' className='w-7'/>
                        <img src="https://cdn-icons.flaticon.com/png/128/4423/premium/4423697.png?token=exp=1654871307~hmac=bf0d7abcf0ffe7c7926e7e88e9426851" alt="" className='w-5 h-5 mt-1'/>
                    </div>
                </div>
                <p className="text-sm text-white flex justify-center">2022 Copyright Scholarhsip Center. All Rights Reserved.</p>
            </div>
        </>
    )
}