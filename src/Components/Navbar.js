import React, { useEffect, useState } from 'react';
import './Navbar.css'

function Navbar() {
    const [show,setShow]=useState(false)
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY>100){
                setShow(true)
            }else{
                setShow(false)
            }
            return ()=>{
                window.removeEventListener('scroll')
            }
        })
    },[])
  return (
    <div className={`navbar ${show && 'navbar_black'}`}>

        <img className='navbar_logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" />
        <img className='navbar_menu' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="" />
    </div>
  )
}

export default Navbar
