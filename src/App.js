import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./Pages/Navigation/Navigation";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Appointment from "./Pages/Appointment/Appointment";
import Register from "./Pages/Register/Register";
import Logins from "./Pages/Logins/Logins";
import Footer from "./Pages/Footer/Footer";
import AuthProvider from "./Pages/Hooks/AuthProvider";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";

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
            <PrivateRoute path="/appointment">
              <Appointment />
            </PrivateRoute>

            <Route path="/register">
              <Register />
            </Route>
            <Route path="/logins">
              <Logins />
            </Route>
          </Switch>
          <Footer/>
        </Router>
    </AuthProvider>
       
    </>
  );
}

export default App;
