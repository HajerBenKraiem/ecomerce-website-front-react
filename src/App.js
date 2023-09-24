import React,{useState} from 'react'
import Nav from './Nav'
import {BrowserRouter}from 'react-router-dom'
import Rout from './Rout'
import Footer from './Footer'
import Productdetail from './Productdetail'



const App = () => {
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
  return (
  <>
  <BrowserRouter>
  <Nav searchbtn={searchbtn}/>

  
  <Rout product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose}/>
  <Footer/>
  </BrowserRouter>
  
  </>
  )
}

export default App
