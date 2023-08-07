import React from 'react'

function MealCard({image, price, dishName}) {
  return (
    <div className='w-[100%] items-center  lg:w-72 '>
        <img className=' rounded-xl py-2 px-4 md:py-1 md:px-1 lg:py-0 lg:px-0' src={image}/>
        <h1 className='curly_font text-black overflow-clip text-sm py-0 md:text-lg md:py-0 lg:text-xl lg:py-0'>{dishName}</h1>
        <p className=' text-orange-400 text-sm py-0 md:text-lg md:py-0 lg:text-xl lg:py-0'>{price}</p>
    </div>
  )
}

export default MealCard;