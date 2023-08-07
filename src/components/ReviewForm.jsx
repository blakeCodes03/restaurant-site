import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";
import "react-notifications-component/dist/theme.css";
import "animate.css";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function ReviewForm() {
  const [formData, setFormData] = useState(
    //intiating state as object
    {
      name: "",
      comments: "",
    }
  );
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      
      const docRef = await addDoc(collection(db, "Testimonials"), {
        message: formData.comments,
        name: formData.name,
      });
      reviewSuccess();
    } catch (e) {
      console.error(e);
      reviewFailed(); // call alert component incase of error
    }
  };

  function handleChange(event) {
    //function to handle change of state onChange
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  const reviewSuccess = () => toast.success("Review sent!"); //alert succusseful review
  const reviewFailed = () => toast.error("Unable to send review, try again"); //alert failed review
  return (
    <div>
      <section className="relative flex flex-wrap lg:h-screen lg:items-center lg:py-10">
        <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-bold sm:text-3xl">Leave a Review!</h1>

            <p className="mt-4 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero
              nulla eaque error neque ipsa culpa autem, at itaque nostrum!
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mx-auto mb-0 mt-8 max-w-md space-y-4"
          >
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>

              <div className="relative">
                <input
                  type="text"
                  value={formData.name}
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Name"
                  onChange={handleChange}
                  name="name"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="sr-only">
                Comments
              </label>
              <textarea
                value={formData.comments}
                placeholder="Comments"
                onChange={handleChange}
                name="comments"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="inline-block rounded-lg bg-orange-600 hover:bg-orange-400 px-5 py-3 text-sm font-medium text-white"
              >
                Send
              </button>
            </div>
          </form>
        </div>

        <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2 hidden lg:block">
          <img
            alt="Welcome"
            src="https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            className="absolute inset-0 h-full w-full object-cover "
          />
        </div>
      </section>
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

export default ReviewForm;
