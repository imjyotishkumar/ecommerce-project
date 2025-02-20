import { BrowserRouter, Routes } from "react-router-dom";
import Header from "./component/Header";
import Navbar from "./component/Navbar";
import Topstrip from "./component/Topstrip";

export default function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Navbar/>
    <Topstrip/>
    
    </BrowserRouter>
   
    </>
  )
}