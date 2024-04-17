import React, { useState } from 'react'
import { Headernav } from '../Components/Header/Headernav';
import { Article } from '../Components/Articles/Article'
import { Footer } from '../Components/Footer/Footer';

export const LandingPage = () => {

    const [selectedCat, setSelectedCat] = useState();

  return (
    <>
    <Headernav setSelectedCat = {setSelectedCat}></Headernav>
    <Article selectedCat = {selectedCat}></Article>
    <Footer></Footer>
    </>
  )
}
