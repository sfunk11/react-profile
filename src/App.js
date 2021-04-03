import React from "react"
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import './App.css';

function App() {
  return (
   <Wrapper>
    <Navbar/>
    <Header/>
    <Footer/>
    </Wrapper>
  );
}

export default App;
