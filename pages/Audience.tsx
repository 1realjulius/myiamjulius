import { motion } from "framer-motion";
import Head from "next/head";
import { useState } from "react";
import CustomBtns from "../components/custom-btns";
import SocialTooltips from "../components/custom-social-tootips";
import Footer from "../components/footer-section";
import MainHeader from "../components/header-section";

export default function Audience() {
  const [submitbtn, setSubmitBtn] = useState("Submit");

  return (
    <div className="flex flex-col bg-[#f7f2f2]  font-PolySansNeutral">
      {/* head */}
      <Head>
        <title>Julius - Audience</title>
        <meta
          name="description"
          content="Website and Software Developer from Ghana."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.iamjulius.com/" />
        <meta
          property="og:title"
          content="Julius Baffour Eghan — Website and Software Developer"
        />
        <meta
          property="og:description"
          content="Website and Software Developer from Ghana."
        />
        <meta property="og:image" content="/Memoji-fav.svg" />
        {/* Favicon */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/Memoji-fav.svg" color="#B6B6B6" />
        <meta name="msapplication-TileColor" content="#B6B6B6" />
        {/* twitter */}
        <meta property="twitter:card" content="/Assets/Julius_Eghan.jpg" />
        <meta property="twitter:url" content="https://www.iamjulius.com/" />
        <meta
          property="twitter:title"
          content="Julius Baffour Eghan — Website and Software Developer"
        />
        <meta
          property="twitter:description"
          content="Website and Software Developer from Ghana."
        />
        <meta property="twitter:image" content="/Assets/Julius_Eghan.jpg" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="google-site-verification"
          content="0HesePHVymRqGiL70HUKPIq0Zsap0uUIb_Ci0DpImRY"
        />
        <meta name="theme-color" content="#f7f2f2" />
      </Head>
      {/* header */}
      <div>
        <MainHeader
          content="Custom Form For Audienceful"
          textSize="md:text-[40px] text-3xl"
        />
      </div>
      {/* main*/}
      <div>
        {/* audiencyfull email client test */}
        <div className="py-10">
          {/* <!-- add your url to the form action attribute--> */}
          <form
            action="https://app.audienceful.com/api/emails/subscribe/nnDuv9FKsxK4MCkGWAwLgZ"
            method="post"
            className="audienceful-form"
          >
            <div className="px-4">
              <div className="font-PolySansBulky text-2xl md:text-5xl">
                {/* User First Name */}
                <div className="my-2 w-full border-b-[3px]  py-2 md:w-[70vw]">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    // onChange={(event: any) => {
                    //   setSenderFName(event.target.value);
                    // }}
                    className="w-full bg-inherit p-2 outline-none placeholder:text-[#828282]"
                    placeholder="Your First Name"
                  />
                </div>
                {/* user Email */}
                <div className="my-2 w-full border-b-[3px]  py-2 md:w-[70vw]">
                  <input
                    name="email"
                    type="email"
                    id="email"
                    placeholder="Enter your email..."
                    required
                    // onChange={(event: any) => {
                    //   setSenderEmail(event.target.value);
                    // }}
                    className="w-full bg-inherit p-2 outline-none placeholder:text-[#828282]"
                  />
                </div>
              </div>
              <div>
                {/* submit btn */}
                <div className="">
                  <div className="my-4 flex flex-col py-2 text-center text-base md:flex-row md:items-center md:space-x-4">
                    <motion.input
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", duration: 0.2 }}
                      id="submit"
                      type="submit"
                      value={submitbtn}
                      className=" flex cursor-pointer select-none flex-col items-center rounded-full bg-black px-6 py-3 text-xl leading-none text-white md:px-12 md:text-2xl"
                    />
                    <div className="px-2 py-2 text-base text-[#828282]">
                      <h1>
                        <span>By Submiting You Have Agreed To Our </span>
                        <br />
                        <span className="text-black">Terms & Agreements </span>
                        <span>and </span>
                        <span className="text-black">Privacy Policy</span>
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        {/* triail Mode text outline */}
        <div className="py-10">
          <div className=" flex flex-col items-start px-10 ">
            <p className="px-8 text-sm">
              This is an outline text fot testing purposes
            </p>
            <div></div>
            <h1 className="text-outline px-2 font-PolySansBulky">
              Hello Julius
            </h1>
          </div>
        </div>
        {/* sticky note trial */}
        <div className=" flex w-full flex-col pt-10 pb-6 pr-10 text-black md:pb-20">
          <div className="flex- flex overflow-hidden">
            {/* cover */}
            <div className=" flex -rotate-[5deg] flex-col bg-inherit p-16 font-NanumPenScript">
              <div className=" relative h-[300px]  w-[240px] rounded-b-sm rounded-tl-sm bg-yellow-400 shadow-lg md:h-[350px] md:w-[300px]">
                {/* the crease top rigth */}
                <div className="absolute top-0 right-0 h-[40px] w-[40px] bg-yellow-200 shadow-md md:h-[68px] md:w-[68px]"></div>
                <div className="absolute -top-[21px] -right-[60px] h-[44px] w-[136px] rotate-[45deg] bg-[#f7f2f2] md:h-[68px] md:w-[136px]"></div>
                {/* content it self */}
                <div className="flex h-full flex-col justify-between space-y-3 py-2 px-2 md:space-y-8 md:py-4 md:px-4">
                  {/* header */}
                  <div className="mr-12 md:mr-16 ">
                    <h1 className="text-xl font-extrabold md:text-3xl">
                      notes from Julius
                    </h1>
                  </div>
                  {/* content */}
                  <div className="flex-1">
                    <h2 className="text-xl md:text-3xl">
                      Living to survive is depressing,Basically you need to have
                      a dreal and visualize it to get moving in life.
                    </h2>
                  </div>
                  {/* signature or ending */}
                  <div className="">
                    <p className="text-xl font-black md:text-3xl">
                      ✓ iamjulius
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* custom btns */}
        <div className="hidden">
          <CustomBtns />
        </div>
        {/* socil tooltips */}
        <div>
          <SocialTooltips />
        </div>
        {/* confetti btn */}
        <div></div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
