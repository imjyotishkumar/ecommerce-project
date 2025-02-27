import { BrowserRouter, Routes } from "react-router-dom";
import Header from "./component/Header";
import Navbar from "./component/Navbar";
import Topstrip from "./component/topstrip/Topstrip";
import Home from "./pages/Home";

export default function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Home/>
    
    
    </BrowserRouter>
   
    </>
  )
}