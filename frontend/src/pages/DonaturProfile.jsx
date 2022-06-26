import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'

function DonaturProfile(){
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return(
        <>
            <Navbar/>
            <h1>Donatur Profile</h1>
            <Footer/>
            
        </>
    )
}

export default DonaturProfile;