import React, { useContext } from "react"
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import NoMatch from "./pages/NoMatch"
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProjectContext from "./utils/projectContext";

function App() {
  
  const context = useContext(ProjectContext);
  return (
  
    <ProjectContext.Provider value={context}>
   <BrowserRouter>
   <Wrapper className="bg">
    <Navbar/>
    <Wrapper >
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
    </ProjectContext.Provider>
  );
}

export default App;
