import React from "react";
import Navbar from "../Navbar";


import { Link } from "react-router-dom";
// import './css/home.scss'
// import classes from "./css/Home.module.scss";
// import 'index.css'
// import './index.js'
const Home = () => {
  return (
    <div id="home" className=" background">
      {/* <div> */}
      <Navbar />
      
      <div className=" flex flex-col items-center justify-center text-center text-white absolute inset-x-0 bottom-[30%]">
        <h5>ENJOY YOUR HEALTHY DELICIOUS MEAL</h5>
        <h1 className=".curly_font text-4xl">Treat Yourself</h1>
        <p className=" text-sm text-center px-20 md:px-40 lg:px-80">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove
        </p>
        <Link to="/menu">
          <button className="rounded-md bg-orange-600 w-80 h-10 lg:w-60 lg:h-10 lg:mx-4 mt-4 text-white opacity-100 font-semibold hover:bg-orange-400">
            Explore Our Menu
          </button>
        </Link>
      </div>

      {/* <section className={styles.banner__overall}>
        <div className={styles.banner__slider}>
          <div className={styles.slider + styles.stick_dots +` text`}>
            <div className={styles.slide}>
              <div className={styles.slide__img}>
                <img
                  src="https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                  alt=""
                  data-lazy=""
                  className={styles.full_image + styles.animated} 
                  data-animation-in="zoomInImage"
                />
              </div>
              <div className={styles.slide__content}>
                <div
                  className={
                    styles.slide__content + styles.headings + " text-center"
                  }
                >
                  <p
                    className={styles.animated + styles.top_title}
                    data-animation-in="fadeInUp"
                    data-delay-in="0.3"
                  >
                    Welcome to Shareat restaurant
                  </p>
                  <h2 className={styles.animated + styles.title} data-animation-in="fadeInUp">
                    Let Enjoy The Rhym Of Fooday Dishes
                  </h2>
                  <button
                    className={styles.btn_light + styles.btn + styles.button_custom + styles.animated}
                    data-animation-in="fadeInUp"
                  >
                    Our menu
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.slide}>
              <div className={styles.slide__img}>
                <img
                  src="https://images.unsplash.com/photo-1550461716-dbf266b2a8a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                  alt=""
                  data-lazy=""
                  className={styles.full_image + styles.animated}
                  data-animation-in="zoomOutImage"
                />
              </div>
              <div className={styles.slide__content + styles.slide__content__right}>
                <div className="slide__content--headings text-right">
                  <p
                    className="animated top-title"
                    data-animation-in="fadeInLeft"
                    data-delay-in="0.2"
                  >
                    Wish you have good food at our restaurant
                  </p>
                  <h2 className="animated title" data-animation-in="fadeInLeft">
                    Experience the food
                  </h2>
                  <button
                    className="btn-success btn button-custom animated text-white"
                    data-animation-in="fadeInUp"
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </div>
            <div className="slide">
              <div className="slide__img">
                <img
                  src=""
                  alt=""
                  data-lazy="https://images.unsplash.com/photo-1502741126161-b048400d085d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                  className="full-image animated"
                  data-animation-in="zoomInImage"
                />
              </div>
              <div className="slide__content slide__content__left">
                <div className="slide__content--headings text-left">
                  <p
                    className="animated top-title"
                    data-animation-in="fadeInRight"
                    data-delay-in="0.2"
                  >
                    Purchase today. just $76
                  </p>
                  <h2
                    className="animated title"
                    data-animation-in="fadeInRight"
                  >
                    SUPER DEAL LUNCH
                  </h2>
                  <button
                    className="btn-light btn button-custom animated"
                    data-animation-in="fadeInUp"
                  >
                    Today's Menu
                  </button>
                </div>
              </div>
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
            <symbol
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 44 44"
              width="44px"
              height="44px"
              id="circle"
              fill="none"
              stroke="currentColor"
            >
              <circle r="20" cy="22" cx="22" id="test" />
            </symbol>
          </svg>
        </div>
      </section> */}
      {/* <section className="banner__slider">
        <div className="slider stick-dots">
          <div className=''>
            <div className="slide">
              <div className="slide__img">
                <img
                  src="https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                  alt=""
                  data-lazy=""
                  className="full-image animated"
                  data-animation-in="zoomInImage"
                />
              </div>
              <div className="slide__content ">
                <div
                  className=
                    "slide__content--headings text-center"
                  
                >
                  <p
                    className="animated top-title"
                    data-animation-in="fadeInUp"
                    data-delay-in="0.3"
                  >
                    Welcome to Shareat restaurant
                  </p>
                  <h2 className="animated title" data-animation-in="fadeInUp">
                    Let Enjoy The Rhym Of Fooday Dishes
                  </h2>
                  <button
                    className="btn-light btn button-custom animated"
                    data-animation-in="fadeInUp"
                  >
                    Our menu
                  </button>
                </div>
              </div>
            </div>
            <div className="slide">
              <div className="slide__img">
                <img
                  src="https://images.unsplash.com/photo-1550461716-dbf266b2a8a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                  alt=""
                  data-lazy=""
                  className="full-image animated"
                  data-animation-in="zoomOutImage"
                />
              </div>
              <div className="slide__content slide__content__right">
                <div className="slide__content--headings text-right">
                  <p
                    className="animated top-title"
                    data-animation-in="fadeInLeft"
                    data-delay-in="0.2"
                  >
                    Wish you have good food at our restaurant
                  </p>
                  <h2 className="animated title" data-animation-in="fadeInLeft">
                    Experience the food
                  </h2>
                  <button
                    className="btn-success btn button-custom animated text-white"
                    data-animation-in="fadeInUp"
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </div>
            <div className="slide">
              <div className="slide__img">
                <img
                  src=""
                  alt=""
                  data-lazy="https://images.unsplash.com/photo-1502741126161-b048400d085d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                  className="full-image animated"
                  data-animation-in="zoomInImage"
                />
              </div>
              <div className="slide__content slide__content__left">
                <div className="slide__content--headings text-left">
                  <p
                    className="animated top-title"
                    data-animation-in="fadeInRight"
                    data-delay-in="0.2"
                  >
                    Purchase today. just $76
                  </p>
                  <h2
                    className="animated title"
                    data-animation-in="fadeInRight"
                  >
                    SUPER DEAL LUNCH
                  </h2>
                  <button
                    className="btn-light btn button-custom animated"
                    data-animation-in="fadeInUp"
                  >
                    Today's Menu
                  </button>
                </div>
              </div>
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
            <symbol
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 44 44"
              width="44px"
              height="44px"
              id="circle"
              fill="none"
              stroke="currentColor"
            >
              <circle r="20" cy="22" cx="22" id="test" />
            </symbol>
          </svg>
        </div>
      </section> */}
     
      
    </div>
  );
};

export default Home;
