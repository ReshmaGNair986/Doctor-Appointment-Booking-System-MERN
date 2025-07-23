// import { assets } from "../assets/assets";
import { Box } from "@mui/material";
import MoveUpOnRender from "../pages/MoveUpOnRender";
import React from "react";

const About = () => {
  return (
     <Box
      sx={{
        height: '100vh',
        backgroundImage: `url('https://images.pexels.com/photos/5863391/pexels-photo-5863391.jpeg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center',
      }}
    >
    <MoveUpOnRender id="about">
      <div>
        <div className="text-center text-2xl pt-10 text-gray-600">
          <h1>
            About <span className="text-gray-700 font-medium" >US</span></h1>
       
        </div>

        {/*  ---------top section---------*/}
        {/* <div className="my-10 flex flex-col md:flex-row gap-12">
          <img
            className="w-full md:max-w-[360px]"
            src={assets.about_image}
            alt=""
          /> */}
          <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
            <p><h3>
              Welcome to DocApp, your trusted partner in managing your
              healthcare needs conveniently and efficiently. At DocApp, we
              understand the challenges individuals face when it comes to
              scheduling doctor appointments and managing their health records.
            </h3></p>
            <p><h3>
              DocApp is committed to excellence in healthcare technology. We
              continuously strive to enhance our platform, integrating the
              latest advancements to improve user experience and deliver
              superior service. Whether you're booking your first appointment or
              managing ongoing care, DocApp is here to support you every
              step of the way.
            </h3></p>
            <b className="text-gray-800"><h2>Our Vision</h2></b>
            <h3><p>
              Our vision at DocApp is to create a seamless healthcare
              experience for every user. We aim to bridge the gap between
              patients and healthcare providers, making it easier for you to
              access the care you need, when you need it.
            </p></h3>
          </div>
        {/* </div> */}

        <div className="text-xl my-4 ">
          <p><h2>
            Why <span className="text-gray-700 font-semibold">Choose Us</span>
          </h2></p>

          <div className="flex flex-col md:flex-row mb-20 mt-4">
            <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
              <h2>Efficiency:</h2>
              <p><h3>
                Streamlined appointment scheduling that fits into your busy
                lifestyle.
              </h3></p>
            </div>
            <div className="border px-10 md:px-15 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
              <b><h2>Convenience:</h2></b>
              <p><h3>
                Access to a network of trusted healthcare professionals in your
                area.
               </h3></p>
            </div>
            <div className="border px-10 md:px-15 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
              <b><h2>Personalization:</h2></b>
              <p><h3>
                Tailored recommendations and reminders to help you stay on top
                of your health.
               </h3></p>
            </div>
          </div>
        </div>
      </div>
      
    </MoveUpOnRender>
    </Box>
  );
};

export default About;
