'use client';
import React, { useState } from 'react';
import { Call, Email, Frame, Star } from '../../../public/Icons/icons';
import { IoIosPersonAdd } from "react-icons/io";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [organization, setOrganization] = useState("");
  const [idea, setIdea] = useState("");

  const handleSubmit = () => {
    console.log({
      name,
      email,
      phone,
      organization,
      idea,
    });
  };

  return (
    <section className="py-12 bg-[#2B2B2B] xl:mt-24 mt-12">
      <div className="container mx-auto">
        <div className="flex gap-12 lg:flex-nowrap flex-wrap">
          {/* Left Content */}
          <div className="pt-12 lg:text-start text-center ">
            <p className="text-[#00A87D]">Contact us ..</p>
            <p className="font-bold text-[32px] text-white">Get In Touch With Us</p>
            <p className="text-white py-3">
              Give us a call or drop by anytime, we endeavour to answer all enquiries
              <br />
              within 24 hours on business days. We will be happy to answer your
              <br />
              questions.
            </p>
            <div className="py-3 flex gap-4 lg:justify-start justify-center">
              <Frame />
              <p className="text-white">
                Worldwide Remote Headquartered in
                <br />
                Islamabad, Pakistan
              </p>
            </div>
            <div className="flex gap-3 py-3  lg:justify-start justify-center">
              <Call />
              <div>
                <p className="text-[#00A87D]">Phone number</p>
                <p className="text-white">+92 313 337 7434</p>
              </div>
            </div>
            <div className="flex gap-4 py-3 lg:justify-start justify-center">
              <Email />
              <div>
                <p className="text-[#00A87D]">Email</p>
                <p className="text-white">info@toptech.team</p>
              </div>
            </div>
          </div>
          {/* Right Form */}
          <div className="bg-[#333333] w-full max-w-xl relative">
            <Star className="absolute left-4 top-4" />
            <Star className="absolute right-4 bottom-4" />
            <div className="px-8 py-24 space-y-4">
              <div className="flex items-center bg-[#2B2B2B] rounded-md px-4 py-3">
                <input
                  type="text"
                  placeholder="Name"
                  className="flex-grow bg-transparent text-white placeholder-gray-400 focus:outline-none"
                  onChange={(e) => setName(e.target.value)}
                />
                <IoIosPersonAdd className="text-white text-xl" />
              </div>
              <div className="flex items-center bg-[#2B2B2B] rounded-md px-4 py-3">
                <input
                  type="text"
                  placeholder="Email"
                  className="flex-grow bg-transparent text-white placeholder-gray-400 focus:outline-none"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <MdOutlineMarkEmailRead className="text-white text-xl" />
              </div>
              <div className="flex items-center bg-[#2B2B2B] rounded-md px-4 py-3">
                <input
                  type="text"
                  placeholder="PhoneNumber"
                  className="flex-grow bg-transparent text-white placeholder-gray-400 focus:outline-none"
                  onChange={(e) => setPhone(e.target.value)}
                />
                <FaPhoneAlt className="text-white text-xl" />
              </div>
              <div className="flex items-center bg-[#2B2B2B] rounded-md px-4 py-3">
                <input
                  type="text"
                  placeholder="Organization"
                  className="flex-grow bg-transparent text-white placeholder-gray-400 focus:outline-none"
                  onChange={(e) => setOrganization(e.target.value)}
                />
              </div>
              <div className="bg-[#2B2B2B] rounded-md px-4 py-3">
                <textarea
                  placeholder="What is your idea?"
                  className="w-full h-24 bg-transparent text-white placeholder-gray-400 focus:outline-none resize-none"
                  onChange={(e) => setIdea(e.target.value)}
                ></textarea>
              </div>
              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="w-full bg-[#00A87D] text-white py-3 rounded-md hover:bg-[#008965] transition"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
