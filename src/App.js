import React from "react";
import {Routes, Route} from 'react-router-dom'
import HomePage from "./components/HomePage";
import CheckoutPage from "./components/CheckoutPage";
import LoginPage from "./components/LoginPage";


const App = () => {
  return(
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path="/checkoutpage" element={<CheckoutPage />}/>
      <Route path="/login" element={<LoginPage />}/>
    </Routes>
  )

  };

export default App;