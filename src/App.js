import React from "react"
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import NoMatch from "./pages/NoMatch"
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
  
   <BrowserRouter>
   <Wrapper>
    <Navbar/>
    <Header/>
    <Wrapper>
      <Switch>
          <Route exact path="/">
            <About />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Wrapper>
    <Footer/>
    </Wrapper>
    </BrowserRouter>
  );
}

export default App;
