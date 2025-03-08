import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Footer from './component/Footer/Footer'

import Home from "./pages/Home";
import ProductListing from "./pages/ProductListing/ProductListing";
import ProductDetails from "./pages/ProductDetails/ProductDetails";

export default function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" exact={true} element={<Home/>} />
      <Route path="/productlisting" exact={true} element={<ProductListing/>} />
      <Route path="/product/:id" exact={true} element={<ProductDetails/>} />

    </Routes>
    <Footer/>
    
    </BrowserRouter>
   
    </>
  )
}