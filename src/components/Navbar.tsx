"use client"
import Link from 'next/link'
import React from 'react'
import './Navbar.css'
import { IoSearchSharp } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { LuMessageSquareMore } from "react-icons/lu";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { RiArrowDropDownLine } from "react-icons/ri";



const Navbar = () => {
  return (
    <nav>
        <div className='left'>
            
                
                <div className='searchbox'>
                    
                <input
                type="text"
                placeholder="Search"
                
              />
              <IoSearchSharp  className="searchbtn" size={20} />
                </div>
            </div>
            <div className='right'>
            <IoIosNotificationsOutline className='theme_icon1' /> 
            <LuMessageSquareMore className='theme_icon1' /> 
                     
               
                
                <HiOutlineUserCircle  className='theme_icon1'/> 
                <p className='dropdown'>Admirra John
                <RiArrowDropDownLine className='theme_icon1'/>
                 </p>
                
                
            </div>
    </nav>
  )
}


export default Navbar
