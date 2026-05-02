"use client";

import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Toast after clicking button
    toast.success("Booking request sent successfully!");

    // ✅ Reset fields
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
    });
  };

  return (
    <div className="bg-[#eff3ed] lg:h-[795px] sm:p-20">
      
      <div className="px-4 mt-3">
        <h2 className="text-xl font-bold">Book This Animal</h2>
        <p className="text-gray-600">
          Fill up this form below to book this animal
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="px-4 mt-3 bg-white m-4 rounded-2xl shadow-sm pb-3 space-y-3"
      >

        <fieldset className="fieldset">
          <legend className="font-bold pt-2">Full Name</legend>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input w-full"
            placeholder="Enter Your Full Name"
            required
          />
        </fieldset>

        <fieldset className="fieldset">
          <legend className="font-bold">Email Address</legend>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input w-full"
            placeholder="Enter Your Email Address"
            required
          />
        </fieldset>

        <fieldset className="fieldset">
          <legend className="font-bold">Phone Number</legend>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="input w-full"
            placeholder="Enter Your Phone Number"
            required
          />
        </fieldset>

        <fieldset className="fieldset">
          <legend className="font-bold">Address</legend>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="input w-full"
            placeholder="Enter Your Address"
            required
          />
        </fieldset>
        <button
          type="submit"
          className="w-full mt-5 btn bg-green-500 text-white rounded-3xl"
        >
          Book Now
        </button>
      </form>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default BookingForm;