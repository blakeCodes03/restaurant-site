import React from "react";
import MealCard from "./mealCard";
import { FiChevronUp } from "react-icons/fi";


function Events() {
  return (
    <div className=" bg-[#FEE2B3] py-20 px-10 text-center lg:py-5 ">
      <div className=" lg:flex lg:mt-10">
        <div className="lg:justify-center">
          <h3 className=" text-sm text-slate-700 text-center lg:text-lg">Events</h3>
          <h1 className="curly_font text-[#3d3d3d] text-4xl text-center py-4">
            Enjoy <span className=" text-orange-400">Our Events</span>
          </h1>
          <p className=" text-sm text-center px-5 md:px-10 lg:px-10">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove
          </p>
          
        </div>
        <div className=" items-center  py-2 px-4 md:py-1 md:px-1 lg:py-5 lg:px-5 ">
          <img
            className=" rounded-xl  lg:rounded-2xl"
            src="https://images.pexels.com/photos/7180617/pexels-photo-7180617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>
      </div>
      <button className="rounded-md bg-orange-600 w-80 h-10 lg:w-60 lg:h-10 lg:mx-4 mt-8 lg:mt-10 text-white opacity-100 font-semibold hover:bg-orange-400">
        Book Now
      </button>
      <a href="#home" className="lg:hidden">
      <div className=" justify-center flex animate-bounce inset-x-0 relative top-20">
        <FiChevronUp size={24} />
      </div>
      </a>
    </div>
  );
}

export default Events;
