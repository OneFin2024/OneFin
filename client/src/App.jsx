import React from "react";
import {Home} from "./Pages/Home.jsx";
import {Login} from "./Pages/Login.jsx";
import {BrowserRouter as Router, Route, Routes} from  'react-router-dom'; 
import { Provider } from 'react-redux';
import { store } from './app/store';
let App = () => {
  return (
    <Provider store={store}>

      <Router>
        <div>
          <Routes>
            <Route exact  path="/" element={<Home/>} >  </Route>
            <Route  path="/login" element={<Login/>} >  </Route>
          </Routes>
        </div>
      </Router>
    </Provider>
  )
}

export default App;