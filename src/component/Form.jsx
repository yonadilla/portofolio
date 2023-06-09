import emailjs from "@emailjs/browser";
import {  useRef, useState } from "react";

function Form() {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lakukan sesuatu dengan data yang dikirimkan
    emailjs
      .sendForm(
        "service_v8r85fc",
        "template_hackqkc",
        form.current,
        "5RJ0tp_Cm3Egditvk"
      )
      .then(() => {
        alert("Terimakasih atas pesannya");
      })
      .catch(() => {
        alert("Pesan gagal terkirim");
      });
    console.log(formData);
    // Reset form setelah pengiriman
    setFormData({
      name: "",
      email: "",
      title: "",
      message: "",
    });
  };
  const Enter = (event) => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  }; 

  return (
    <>
      <form
        ref={form}
        onKeyDown={(e) => Enter(e)}
        className="w-full max-w-lg font-FiraCode"
      >
        <div className="flex mt-3  flex-wrap -mx-3 mb-3">
          <div className="w-full mb-3 md:w-1/2 px-3 md:mb-0">
            <input
              className="appearance-none block w-full bg-gray-200 text-abu border border-white py-1 px-2 leading-tight focus:outline-none focus:bg-white"
              id="name"
              name="name"
              type="text"
              value={formData.name}
              placeholder="name"
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <input
              className="appearance-none block w-full bg-gray-200 text-abu border border-white py-1 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="email"
              name="email"
              type="email"
              value={formData.email}
              placeholder="email"
              onChange={(event) => handleChange(event)}
              required
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-3">
          <div className="w-full px-3">
            <input
              className="appearance-none block w-full bg-gray-200 text-abu border border-white py-1 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              name="title"
              type="text"
              placeholder="Title"
              value={formData.title}
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <textarea
            className="appearance-none block w-full mx-3 bg-gray-200 text-abu border border-white py-1 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            name="message"
            id="message"
            cols="30"
            rows="10"
            value={formData.message}
            placeholder="Message"
            onChange={(e) => handleChange(e)}
            required
          ></textarea>
        </div>
        <button
          type="su  bmit"
          className="border border-solid border-primary py-2 px-4 hover:bg-primary hover:text-white"
          onClick={handleSubmit}
        >
          send
        </button>
      </form>
    </>
  );
}

export default Form;
