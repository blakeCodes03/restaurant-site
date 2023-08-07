import React, { useEffect, useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/homePage/Home";
import Meal from "./components/Meal";
import Testimonial from "./components/Testimonial";
import Events from "./components/Events";
import Menu from "./components/Menu";
import ErrorPage from "./components/ErrorPage";

import Footer from "./components/Footer";
import Loader from './components/loader/Loader';
import ReviewForm from './components/ReviewForm';
import Cart from './components/cart/Cart'
// import ReactNotifications from 'react-notifications-component';
// import 'react-notifications-component/dist/theme.css';


function App() {
  

    const [loading, setLoading] = useState(true);
    
      useEffect(() => { //to make Loader component appear for 5 secs before showing home page
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      }, []);
     
  
  return (
    <>
  {loading ? <Loader/> :  

    <Router>
      <Routes>
      
        <Route
          path="/"
          element={[<Home  key={1}/>, <Meal  key={2}/>, <Testimonial  key={3}/>, <Events  key={4}/>, <ReviewForm key={5}/>,<Footer key={6}/>]}

        />
        <Route path="/menu" element={[<Menu key={1} />]} />
        <Route path="/cart" element={[<Cart key={1} />]} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  }
    </>
  );
}

export default App;
