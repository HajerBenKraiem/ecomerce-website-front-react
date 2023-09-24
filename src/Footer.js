import React from 'react'
import {BiLogoFacebook} from 'react-icons/bi';
import {FaInstagramSquare} from 'react-icons/fa';
import {AiOutlineTwitter} from 'react-icons/ai';
import {AiFillYoutube}from 'react-icons/ai';
import './Footer.css';


const Footer = () => {
  return (
    
    <div className='footer'>
        <div className='container'>
            <div className='about'>
                <div className='logo'>
                    <img src='./img/logo.svg' alt='logo'></img>

                </div>
                <div className='detail'>
                    <p> we are a team of designers and developers that create hight quality wordpress</p>
                    <div className='icon'>
                        <li> <BiLogoFacebook/></li>
                        <li> <FaInstagramSquare/></li>
                        <li> <AiOutlineTwitter/></li>
                        <li> <AiFillYoutube/></li>
                    </div>

                </div>

            </div>
           <div className='account'>
            <h3> My Account</h3>
            <ul>
                <li>Account</li>
                <li>Order</li>
                <li>Cart</li>
                <li>shipping</li>
                <li>return</li>


            </ul>

           </div>
           <div className='page' >
            <h3>Pages</h3>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Terma & Condition</li>
            </ul>


           </div>
        </div>

    </div>
    
    
  )
}

export default Footer
