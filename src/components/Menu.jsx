import React, { useEffect, useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Navbar";
import Loader from "./loader/Loader";
import MenuCard from "./MenuCard";
// [#622406,#675915,#785416]
function Menu() {
  const [imageURL, setImageURL] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [cart, setCart] = useLocalStorageState("localStorageCart", {});

  //fetching images from database
  const fetchPost = async () => {
    // try {
      await getDocs(collection(db, "menuList")).then((querySnapshot) => {
        const newData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setProducts(newData);
        setIsLoading(false);
        // console.log(newData);
      });
    // } catch (error) {
    //   setError(true);
    //   setIsLoading(false);
    // }
  };

  useEffect(() => {
    fetchPost(); //uncomment when you want to deploy
  }, []);

  const addToCart = (product) => {
    product.quantity = 1;

    setCart((prevCart) => ({
      ...prevCart,
      [product.id]: product,
    }));
  };

  const isInCart = (productId) =>{
      const happy = Object.keys(cart || {}).includes(productId.toString())
    
      return (happy);
      
  }

  if (error) {
    return toast.error("Unable to send page, try again"); //alert failed review
  }

  if (isLoading) {
    return <Loader />;
  }

  // Const truncate (words, maxlength)=&gt;{
  //   return `${words.slice(0, maxlength)} …`
  //   }
  return (
    <div className=" bg-[#FEE2B3] min-h-screen ">
      <Navbar />
      {/* <Nav/> */}
      <div className="pl-6 pt-4">
        <h1 className=" text-white text-2xl lg:text-4xl curly_font ">
          Eat Fresh With&#160;
          <span className=" text-orange-400 curly_font">
            US
          </span>
        </h1>
      </div>
      <div className="mx-auto grid max-w-6xl gap-6 p-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <MenuCard
            key={product.id}
            food={product.food}
            img_url={product.img_url}
            price={product.price}
            productId={product.id}
            addToCart={addToCart}
            isInCart={isInCart}
            product = {product}
          />
        ))}
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default Menu;
