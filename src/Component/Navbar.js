import React from 'react'
import saelogo from '../Asset/sae.jpg'
import { FaSearch } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { MdOutlineShoppingBag } from "react-icons/md";


export default function Navbar() {
    return (
        <>

            <div class="navbar">
                <span className="logoAndserach">
                    <img id="sae" src={saelogo} alt='logo' />
                    <span id="search"><FaSearch /> <input type="text" placeholder="Search Opportunities" /></span>
                </span>
                <ul className='servicelist'>
                    <li><a id="learn"  href='/'>Learn</a></li>
                    <li><a id="practice" href='/'>Practice</a></li>
                    <li><a id="mentor" href='/'>Mentorship</a></li>
                    <li><a id="compete" href='/'>Compete</a> </li>
                    <li><a id="intern" href='/'>Internships</a></li>
                    <li><a id="jobs" href='/'>Jobs</a></li>
                    <li><a id="login" href='/'>Login</a></li>
                    <li><a id="host" href='/'>< IoMdAdd />Host</a></li>
                    <li><a id="host" href='/'><MdOutlineShoppingBag />For Business</a></li>
                </ul>
            </div>
        {/* mobile nav */}
            <div className="moblienavbar">
                <span><img id="sae" src={saelogo} alt='logo'/></span>
                 <ul>
                    <li><FaSearch /></li>
                    <li><li><a id="login" href='/'>Login</a></li></li>
                    <li><MdOutlineShoppingBag /></li>
                 </ul>
            </div>
        </>
    )
}
