import React from 'react'
import CategoryList from '../components/CategoryList'
import BannerProduct from '../components/BannerProduct'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
import VerticalCardProduct from '../components/VerticalCardProduct'

const Home = () => {
  return (
    <div>
      <CategoryList/>
      <BannerProduct/>

      <HorizontalCardProduct category={"laptops"} heading={"Laptop Computers"}/>
      <HorizontalCardProduct category={"desktop"} heading={"Desktop Computers"}/>

      <VerticalCardProduct category={"phones"} heading={"Mobile Phones"}/>
      <VerticalCardProduct category={"printers"} heading={"Printers"}/>
      <VerticalCardProduct category={"speakers"} heading={"Speakers"}/>
      <VerticalCardProduct category={"accesories"} heading={"Electronic Accesories"}/>
    
    </div>
  )
}

export default Home