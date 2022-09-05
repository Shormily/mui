import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./Pages/Navigation/Navigation";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";

import Logins from "./Pages/Logins/Logins";
import Footer from "./Pages/Footer/Footer";
import AuthProvider from "./Pages/Hooks/AuthProvider";
import FAQ from "./Pages/FAQ/FAQ.js";
import Contact from "./Pages/Contact/Contact";
import Product from "./Pages/Product/Product";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Navigation />
          <br />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/faq">
              <FAQ/>
            </Route>
            <Route path="/product">
              <Product/>
            </Route>
            <Route path="/contact">
              <Contact/>
            </Route>

            <Route path="/logins">
              <Logins />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
