import React, { useState }  from 'react'
import { Link } from 'react-router-dom'
import {BsArrowRight } from 'react-icons/bs';
import {FiTruck } from 'react-icons/fi';
import {BsCurrencyDollar } from 'react-icons/bs';
import {FaPercent } from 'react-icons/fa';
import {BsHeadphones } from 'react-icons/bs';
import {AiOutlineShoppingCart } from 'react-icons/ai';

import {AiOutlineEye } from 'react-icons/ai';
import {AiOutlineHeart} from 'react-icons/ai';

import './Home.css'

import  Homeproduct from './Homeproduct';

const Home = () => {
  const [Homeproducts,setHomeProducts]= useState(Homeproduct)
  return (
   <>
   <div className='top_banner'>
    <div className='container'>
      <div className='detail'>
        <h2>The Best  Note Book collection2023</h2>
         
         <Link  to='/produit' className='link'> Shop Now <BsArrowRight/></Link>
        
      </div>
      <div className='img_box'>
        <img src='/img/slider-img.png' alt='sliderimg'></img>

      </div>
       
    </div>

   </div>
   <div className='product_type'>
    <div className='container'>

      <div className='box'>
        <div className='img_box'>
          <img src="/img/Mobile Phone.png" alt='mobile'/>
        </div>
        <div className='detail'>
          <p>23 product</p>

        </div>

        <div className='box'>
        <div className='img_box'>
          <img src="/img/headphone.png" alt='headphone'/>
        </div>
        <div className='detail'>
          <p>52 product</p>

        </div>
        </div>

         <div className='box'>
        <div className='img_box'>
          <img src="/img/smart watch.png" alt='smartwatch'/>
        </div>
        <div className='detail'>
          <p>18 product</p>

        </div>
        </div>

        <div className='box'>
        <div className='img_box'>
          <img src="/img/cpu heat.jpg" alt='cpu'/>
        </div>
        <div className='detail'>
          <p>52 product</p>

        </div>
        </div>

       
      </div>

    </div>

   </div>
   <div className='about'>
    <div className='container'>
      <div className='box'>
        <div className='icon'>
          <FiTruck/>

        </div>
        <div className='detail'>
          <h3>FREE Shipping</h3>
          <p>Oder above $1000</p>

        </div>


      </div>

      <div className='box'>
        <div className='icon'>
          <BsCurrencyDollar/>

        </div>
        <div className='detail'>
          <h3>Return & Refund</h3>
          <p>Money Back Gaurenty</p>

        </div>


      </div>


      <div className='box'>
        <div className='icon'>
          <BsHeadphones/>

        </div>
        <div className='detail'>
          <h3>Costemer support</h3>
          <p>Every Time Call Support</p>

        </div>


      </div>


      <div className='box'>
        <div className='icon'>
          <FaPercent/>

        </div>
        <div className='detail'>
          <h3>Member Discount</h3>
          <p>On every order</p>

        </div>


      </div>


      

    </div>

   </div>
   <div className='product'>
    <h1> Top Products</h1>
    <div className='container'>

      {
        Homeproducts.map((curElm)=>
        {
          return(
            <>
            <div className='box' key={curElm.id} >
                   <div className='img_box'>
                       <img src={curElm.Img} alt={curElm.Title}></img>
                        <div className='icon'>
                          <li> <AiOutlineShoppingCart/></li>
                          <li> < AiOutlineEye/></li>
                          <li> <AiOutlineHeart/></li>
                        </div>
                   </div>
                   <div className='detail'>
                    <p> {curElm.Cat}</p>
                    <h3>{curElm.Title}</h3>
                    <h4>{curElm.Price}$</h4>

                   </div>
            </div>
            </>
          )
        })
      }
     
    </div>


   </div>

   <div className='banner'>
    <div className='container'>

    <div className='detail'>
      <h4>LATEST TECHNOLOGY ADDED</h4>
      <h3> Apple ipad 10.2 9th Gen-2021</h3>
      <p>   <BsCurrencyDollar/>986</p>
      <Link  to='/produit' className='link'> Shop Now <BsArrowRight/></Link>

    </div>
    <div className='img_box'>
      <img src='./img/slider-img.png' alt='sliderimg'></img>

    </div>

    </div>
    

   </div>
   </>
  )
}

export default Home
