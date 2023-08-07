import React, { useEffect, useState } from "react";
import useLocalStorageState from 'use-local-storage-state';

import Navbar from "./Navbar";
import Nav from "./homePage/Nav";
import { storage } from "./firebase";
import { ref, list, listAll, getDownloadURL } from "firebase/storage";
import MenuCard from "./MenuCard";
// [#622406,#675915,#785416]
function Menu() {
  const [imageURL, setImageURL] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const [products, setProducts] = useState([])
  const [error, setError] = useState(false)
  const [cart, setCart] = useLocalStorageState('cart', {})

  //fetching images from database
  const fetchImages = async () => {
    const storageRef = ref(storage, ""); //empty string because images are not stored in any path
    const result = await listAll(storageRef);
    const urlPromises = result.items.map((imageRef) =>
      getDownloadURL(imageRef)
    );
    return Promise.all(urlPromises);
  };
  const loadImages = async () => {
    const urls = await fetchImages();    
    setImageURL(urls); //set recieved urls of images to state
    // console.log(imageURL);
  };

  useEffect(() => {
    // loadImages();
  }, []);

  return (
    <div className="menu-container">
      <Navbar />
      {/* <Nav/> */}
      <div className="pl-6 pt-4">
        <h1 className=" text-white text-3xl lg:text-4xl">
          Eat Fresh With&#160;
          <span className=" text-orange-400 pt-6 h-[5px] logo text-[3.6rem]  tracking-[0.1rem] lg:text-[6rem]">
            US
          </span>
        </h1>
      </div>
      <div className="mx-auto grid max-w-6xl gap-6 p-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {imageURL.map((urlsName) => (
          <MenuCard key={urlsName} url={urlsName} />
        ))}
      </div>
    </div>
  );
}

export default Menu;
