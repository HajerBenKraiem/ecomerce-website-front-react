import React,{useState} from 'react'
import Nav from './Nav'
import {BrowserRouter}from 'react-router-dom'
import Rout from './Rout'
import Footer from './Footer'
import Productdetail from './Productdetail'
//import Cart from './Cart'



const App = () => {
  //add to cart
  const [cart,setCart]=useState([])
   //productdetails
   const [close, setClose] = useState(true)//nrmlmt true
   const [detail, setDetail] = useState([])
  //filtrer product
  const [product,setProduct] = useState(Productdetail)

  const searchbtn = (product) => 
  {
    const change = Productdetail.filter((x) => 
    {
      return x.Cat === product
    })
    setProduct(change)
  }
  //product detail
  const view=(product)=>{
    setDetail([{...product}])
    setClose(true)
  }

   // add to cart
   const addtocart = (product) => 
   {
     const exsit = cart.find((x) => 
     {
       return x.id === product.id
     })
     if(exsit)
     {
       alert("This Product is already added to cart")
     }
     else
     { 
       setCart([...cart, {...product, qty:1}])
       alert("product is added to cart")
     }
   } 
   console.log(cart)
  return (
  <>
  <BrowserRouter>
  <Nav searchbtn={searchbtn}/>

  
  <Rout product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} cart={cart} setCart={setCart} addtocart={addtocart}/>
  <Footer/>
  </BrowserRouter>
  
  </>
  )
}

export default App
