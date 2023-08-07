import React, { useState } from "react";
import "animate.css";
import MealCard from "./mealCard";
import { breakfast, lunch, dinner, drinks } from "./mealDetails";
import { FiChevronUp } from "react-icons/fi";


function createMeal(mealType) {
  return (
    <MealCard
      key={mealType.id}
      image={mealType.mealImage}
      price={mealType.price}
      dishName={mealType.dishName}
    />
  );
}
function Meal() {
  const [mealNumber, setMealNumber] = useState(1);

  let meal;
  const showMeal = (mealNumber) => {
    switch (mealNumber) {
      case 1:
        setMealNumber(1);
        meal == "Breakfast";
        break;
      case 2:
        setMealNumber(2);
        meal === "Lunch";
        break;
      case 3:
        setMealNumber(3);
        meal === "Dinner";
        break;
      default:
        setMealNumber(4);
        meal === "Drinks";
        break;
    }
  };
//   const menuSlider = () => {
//     if (mealNumber < 4) {
//       setMealNumber(prevMealNumber => prevMealNumber + 1);
//     console.log("happy");
//     } else {
//       setMealNumber(1);
//     console.log("sad");
//     }
//   };
//   setInterval(menuSlider, 7000);
//   console.log(mealNumber);
  
  return (
    <div className=" bg-[#FEE2B3] py-20 px-10 text-center lg:py-5 lg:flex ">
      <div className=" flex flex-col lg:w-[40%] lg:mt-6 lg:ml-20">
        <h3 className=" text-sm text-slate-700 text-center">
          Select Your Meal
        </h3>
        <h1 className="curly_font text-4xl text-center py-4">
          Popular <span className=" text-orange-400">Foods</span>
        </h1>
        <button
          className={` ${
            mealNumber === 1 ? " bg-white text-orange-400" : ""
          } " py-4 text-xl text-black lg:w-40 lg:rounded-full "`}
          onClick={() => showMeal(1)}
        >
          Breakfast
        </button>
        <button
          className={` ${
            mealNumber === 2 ? " bg-white text-orange-400" : ""
          } " py-4 text-xl text-black lg:w-50 lg:rounded-full "`}
          onClick={() => showMeal(2)}
        >
          Lunch
        </button>
        <button
          className={` ${
            mealNumber === 3 ? " bg-white text-orange-400" : ""
          } " py-4 text-xl text-black lg:w-50 lg:rounded-full  "`}
          onClick={() => showMeal(3)}
        >
          Dinner
        </button>
        <button
          className={` ${
            mealNumber === 4 ? " bg-white text-orange-400" : ""
          } " py-4 text-xl text-black lg:w-50 lg:rounded-full "`}
          onClick={() => showMeal(4)}
        >
          Drinks
        </button>
      </div>
      <h1 className="curly_font text-lg text-black">{meal}</h1>
      <div className="mt-6 lg:mt-6  lg:pl-[15%] ">
        {mealNumber === 1 && (
          <div className="grid-container animate__animated  animate__slideInRight  ">
            {breakfast.map(createMeal, { mealType: breakfast })}
          </div>
        )}
      </div>
      <div className="mt-6 lg:mt-6  lg:pl-0">
        {mealNumber === 2 && (
          <div className="grid-container animate__animated animate__slideInRight ">
            {lunch.map(createMeal, { mealType: lunch })}
          </div>
        )}
      </div>
      <div className="mt-6 lg:mt-6  lg:pr-30">
        {mealNumber === 3 && (
          <div className="grid-container animate__animated animate__slideInRight ">
            {dinner.map(createMeal, { mealType: dinner })}
          </div>
        )}
      </div>
      <div className="mt-6 lg:mt-6  lg:pr-60">
        {mealNumber === 4 && (
          <div className=" grid-container animate__animated animate__slideInRight ">
            {drinks.map(createMeal, { mealType: drinks })}
          </div>
        )}
      </div>
      <a href="#home" className="lg:hidden">
      <div className=" justify-center flex animate-bounce inset-x-0 relative top-20 ">
        <FiChevronUp size={24} />
      </div>
      </a>
    </div>
  );
}

export default Meal;
