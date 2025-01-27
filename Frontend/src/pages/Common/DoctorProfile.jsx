import React from 'react'
import doc1 from "../../assets/assets_frontend/doc1.png";
import verified_icon from "../../assets/assets_frontend/verified_icon.svg";
import Navbar from '../../components/Navbar';
import  { useState } from "react";


const DoctorProfile = () => {


  const [selectedDate, setSelectedDate] = useState("10");
  const [selectedTime, setSelectedTime] = useState("9:00 am");

  const dates = [
    { day: "MON", date: "10" },
    { day: "TUE", date: "11" },
    { day: "WED", date: "12" },
    { day: "THU", date: "13" },
    { day: "FRI", date: "14" },
    { day: "SAT", date: "15" },
    { day: "SUN", date: "16" },
  ];

  const timeSlots = [
    "8:00 am",
    "8:30 am",
    "9:00 am",
    "9:30 am",
    "10:00 am",
    "10:30 am",
    "11:00 am",
    "11:30 am",
  ];

  // const dates = ["SUN 26", "MON 27", "TUE 28", "WED 29", "THU 30", "FRI 31", "SAT 1"];
  // const timeSlots = ["10:30 am", "11:00 am", "11:30 am", "12:00 pm", "12:30 pm", "01:00 pm", "01:30 pm", "02:00 pm"];
    const doctors = [
      {_id: "doc1",name: "Dr. Richard James",image: doc1,speciality: "General physician",degree: "MBBS",experience: "4 Years",about:"Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",fees: 50,address: {line1: "17th Cross, Richmond",line2: "Circle, Ring Road, London",},},
    ];
    console.log(doctors);
    
  return (
    <>
    <Navbar/>
      <div className="mt-[4.5rem] mx-auto w-[80%] ">
      <div className="flex flex-col md:flex-row gap-4 py-10">
      <div><img src={doctors[0].image} alt="" className='bg-buttonColor w-full max-w-72 rounded-lg' /></div>
      <div className='flex-1 border border-gray-400 p-8 xl:pr-40  py-7 bg-white rounded-lg mx-2 md:mx-0 mt-[-80px] md:mt-[0]'>
      <h1 className='flex items-center gap-2 text-2xl font-medium text-gray-900'>{doctors[0].name}  <img src={verified_icon} alt="" className='w-5' /></h1>

        <div className='flex items-center gap-2 text-base mt-1 text-gray-600'><p> <span>{doctors[0].degree}</span> - <span>{doctors[0].speciality} </span></p> <button className='py-0.5 px-2 text-xs border rounded-full'>{doctors[0].experience} </button> </div>
         
         <div>
           <h2 className=' text-gray-900 font-medium mt-3'>About</h2>
           <p className='text-sm text-gray-500 max-w-[700px mt-1]'>{doctors[0].about}</p>
         </div>
          <p className=' text-gray-700 font-medium mt-3'>Appointment fee: <span className='text-black font-semibold'>${doctors[0].fees}</span></p>
      </div>
      </div>

      <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Booking Slots</h2>

      {/* Date Selection */}
      <div className="flex space-x-2 overflow-x-auto pb-2">
        {dates.map(({ day, date }) => (
          <button
            key={date}
            className={`w-12 h-16 rounded-full transition-all ${
              selectedDate === date
                ? "bg-buttonColor text-white"
                : "bg-white text-gray-700 border border-gray-300"
            }`}
            onClick={() => setSelectedDate(date)}
          >
            <span className="block text-xs">{day}</span>
            <span className="block font-semibold">{date}</span>
          </button>
        ))}
      </div>

      {/* Time Slots */}
      <div className="flex space-x-2 mt-4 overflow-x-auto pb-2">
        {timeSlots.map((time) => (
          <button
            key={time}
            className={`px-4 py-2  rounded-full transition-all ${
              selectedTime === time
                ? "bg-buttonColor text-white"
                : "bg-white text-gray-700 border border-gray-300"
            }`}
            onClick={() => setSelectedTime(time)}
          >
            {time}
          </button>
        ))}
      </div>

      {/* Booking Button */}
      <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-all">
        Book an Appointment
      </button>
    </div>

      </div>
    </>
  )
};

export default DoctorProfile;
