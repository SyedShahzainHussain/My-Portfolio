import React from "react";
import { useState } from "react";
import axios from "axios";

const Contacts = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  let name, value;
  const userData = (e) => {
    name = e.target.name;
    value = e.target.value;
    setData({ ...data, [name]: value });
  };
  
  const submitHandler = async  (e) => {
    e.preventDefault();
    const { name, email, message } = data;
   await  axios.post("https://portfolio-5450f-default-rtdb.firebaseio.com/portfolio.json",
      {
        name,
        email,
        message, 
      });

   setData("")

  };

  return (
    <div
      id="contacts"
      className="w-full bg-[#7652cc]  md:h-screen flex justify-center items-center p-4"
    >
      <form
        className="flex flex-col max-w-[1000px] w-full"
        onSubmit={submitHandler}
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#edb249] text-white">
            Contacts
          </p>
          <p className="text-white py-4">Submit the form below </p>
        </div>
        <input
          className="my-2 bg-[#d6dcf7] p-2"
          name="name"
          value={data.name}
          onChange={userData}
          type="text"
          placeholder="Name"
          autoComplete="off"
        />
        <input
          className="my-2 bg-[#d6dcf7] p-2"
          value={data.email}
          name="email"
          onChange={userData}
          type="email"
          placeholder="Email"
          autoComplete="off"
        />
        <textarea
          className="my-2 bg-[#d6dcf7] p-2"
          value={data.message}
          onChange={userData}
          name="message"
          cols="30"
          placeholder="Message"
          autoComplete="off"
          rows="10"
        ></textarea>
        <button  className="text-white  border-2 cursor-pointer flex px-4 items-center w-fit mx-auto my-2 py-4 hover:bg-[#edb429] hover:border-[#edb429]">
          Let's Callaborate
        </button>
      </form>
    </div>
  );
};

export default Contacts;
