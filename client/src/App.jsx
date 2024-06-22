import React from "react";
import {Home} from "./Pages/Home.jsx";
import {Login} from "./Pages/Login.jsx";
import {BrowserRouter as Router, Route, Routes} from  'react-router-dom'; 
import { Provider } from 'react-redux';
import { store } from './app/store';
import Navbare from './components/Navbare.jsx';
import Topbar from "./components/Topbar.jsx";
import Footer from "./components/Footer.jsx";

// import Register from "./Pages/Register.jsx";
import AboutUs from "./Pages/AboutUs.jsx";
import ContactUs from "./Pages/ContactUs.jsx";
import Testimonials from "./Pages/Testimonials.jsx";
import FAQ from "./Pages/FAQ.jsx";
import LoanApplication from "./Pages/LoanApplication.jsx";


let App = () => {
  return (
    <Provider store={store}>
         <Topbar/>
         <Navbare/>

      <Router>
        <div>
          <Routes>
            <Route exact  path="/" element={<Home/>} >  </Route>
            <Route  path="/login" element={<Login/>} >  </Route>
            <Route  path="/AboutUs" element={<AboutUs/>} >  </Route>
            <Route  path="/ContactUs" element={<ContactUs/>} >  </Route>
            <Route  path="/Testimonials" element={<Testimonials/>} >  </Route>
            <Route  path="/FAQ" element={<FAQ/>} >  </Route>
            <Route  path="/LoanApplication" element={<LoanApplication/>} >  </Route>
          </Routes>
        </div>
      </Router>
      <Footer/>
    </Provider>
  )
}
export default App;