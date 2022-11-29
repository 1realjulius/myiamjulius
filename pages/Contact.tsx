import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import memojiStand from "../public/Memoji-Call.png";
import Head from "next/head";
import MainHeader from "../components/header-section";

export default function Contact() {
  //Get Current Date for the Sender Identification
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = today.getFullYear();
  const mytoday = mm + dd + yyyy;

  const [SubmitBtn, setSubmitBtn] = useState("Submit");
  const [senderFName, setSenderFName] = useState("");
  const [senderLName, setSenderLName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [senderMessage, setSenderMessage] = useState("");
  const senderID = `#${mytoday}${senderFName.slice(0, 3)}`;
  const [projectType, setProjectType] = useState("Website");
  const [projectBudget, setProjectBudget] = useState("Basic");
  const [copied, setCopied] = useState(false);
  const [complete, setComplete] = useState(false);

  const formData = {
    senderID,
    senderFName,
    senderLName,
    senderEmail,
    senderMessage,
    projectType,
    projectBudget,
  };

  // when form is submitted
  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitBtn("Submitting...");
    try {
      const res = await fetch("/api/ContactEmail", {
        method: "POST",
        headers: {
          "Content-Type": "Aplication/json",
        },
        body: JSON.stringify(formData),
      });
      console.log(res.status);
      if (res.status === 200) {
        setSubmitBtn("Message Submitted");
      }
    } catch (error) {
      console.log(1);
      console.log(error);
      setSubmitBtn("Try Again");
    }
    console.log("Message Sent 🚀🚀🚀");
  };

  //The State Manager for the Project Types.
  const handleProjectChange = (e: any) => {
    let name = e.target.value;
    setProjectType(e.target.value);
  };

  //The State Manager for the Project Budgets.
  const handleBudgetChange = (e: any) => {
    let name = e.target.value;
    setProjectBudget(e.target.value);
  };

  //copy to clipboard
  const copyToClipBoard = () => {
    if (senderID) {
      navigator.clipboard.writeText(
        `Your Unique Id for The Message: ${senderID} `
      );
      setCopied(true);
    } else {
      setCopied(false);
    }
  };

  useEffect(() => {
    if (
      senderFName.length > 0 &&
      senderLName.length > 0 &&
      senderEmail.length > 0 &&
      senderMessage.length > 0
    ) {
      setComplete(true);
    } else {
      setComplete(false);
    }

    // return () => {
    //   second
    // }
  });

  // console.log(formData);
  return (
    <div className="bg-[#f7f2f2] font-PolySansNeutral text-black">
      {/* head */}
      <Head>
        <title>Julius - Contact</title>
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
      <MainHeader
        content="Tell Me About Your Project"
        textSize="md:text-[108px] text-5xl"
      />
      {/* main */}
      <div className="flex flex-col px-4 py-10 md:px-10">
        <form action="submit" onSubmit={handleOnSubmit}>
          {/* project type checkboxes */}
          <div className="w-full border-b-[3px] py-4">
            <div>
              <h1 className="font-PolySansBulky text-3xl text-[#828282] md:text-5xl">
                I am Interested In (A/An)
              </h1>
            </div>
            {/* Radio checkboxes for the project type */}
            <div className="flex flex-col">
              <div className="flex flex-row space-x-2 py-4 text-sm md:space-x-4 md:text-lg">
                {/* rcbb */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", duration: 0.2 }}
                  className={`${
                    projectType === "Website"
                      ? "flex flex-col items-center rounded-full bg-black text-white"
                      : "flex flex-col items-center rounded-full bg-white shadow"
                  }`}
                >
                  <label className="relative cursor-pointer select-none overflow-hidden px-4 py-3">
                    {/* //this input is hidden cos there is no appearance for it */}
                    <input
                      type="radio"
                      name="BudgetOptions"
                      value="Website"
                      checked={projectType === "Website"}
                      onChange={handleProjectChange}
                      className="absolute -left-[999px] appearance-none"
                    />
                    <span data-text="Website" className="text-lg">
                      Website
                    </span>
                  </label>
                </motion.div>
                {/* rcbe */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", duration: 0.2 }}
                  className={`${
                    projectType === "App"
                      ? "flex flex-col items-center rounded-full bg-black text-white"
                      : "flex flex-col items-center rounded-full bg-white shadow"
                  }`}
                >
                  <label className="relative cursor-pointer select-none overflow-hidden px-6 py-3">
                    {/* //this input is hidden cos there is no appearance for it */}
                    <input
                      type="radio"
                      name="BudgetOptions"
                      value="App"
                      className="absolute -left-[999px] appearance-none"
                      checked={projectType === "App"}
                      onChange={handleProjectChange}
                    />
                    <span data-text="App" className="text-lg">
                      App
                    </span>
                  </label>
                </motion.div>
                {/* rcba */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", duration: 0.2 }}
                  className={`${
                    projectType === "Branding"
                      ? "flex flex-col items-center rounded-full bg-black text-white"
                      : "flex flex-col items-center rounded-full bg-white shadow"
                  }`}
                >
                  <label className="relative cursor-pointer select-none overflow-hidden px-6 py-3">
                    {/* //this input is hidden cos there is no appearance for it */}
                    <input
                      type="radio"
                      name="BudgetOptions"
                      value="Branding"
                      className="absolute -left-[999px] appearance-none"
                      checked={projectType === "Branding"}
                      onChange={handleProjectChange}
                    />
                    <span data-text="Branding" className="text-lg">
                      Branding
                    </span>
                  </label>
                </motion.div>
              </div>
            </div>
          </div>
          {/* Client Details form */}
          <div className="font-PolySansBulky text-2xl md:text-5xl">
            {/* User First Name */}
            <div className="my-2 w-full border-b-[3px]  py-2 md:w-[70vw]">
              <input
                type="text"
                name="SenderFName"
                onChange={(event: any) => {
                  setSenderFName(event.target.value);
                }}
                className="w-full bg-inherit p-2 outline-none placeholder:text-[#828282]"
                placeholder="Your First Name"
              />
            </div>
            {/* User Last Name */}
            <div className="my-2 w-full border-b-[3px]  py-2 md:w-[70vw]">
              <input
                type="text"
                name="SenderLName"
                onChange={(event: any) => {
                  setSenderLName(event.target.value);
                }}
                className="w-full bg-inherit p-2 outline-none placeholder:text-[#828282]"
                placeholder="Your Last Name"
              />
            </div>
            {/* user Email */}
            <div className="my-2 w-full border-b-[3px]  py-2 md:w-[70vw]">
              <input
                type="email"
                name="SenderEmail"
                onChange={(event: any) => {
                  setSenderEmail(event.target.value);
                }}
                className="w-full bg-inherit p-2 outline-none placeholder:text-[#828282]"
                placeholder="Your Email"
              />
            </div>
            {/* Tell Us about Your Event */}
            <div className="my-2 w-full border-b-[3px]  py-2 md:w-[70vw]">
              <textarea
                name="SenderMessage"
                onChange={(event: any) => {
                  setSenderMessage(event.target.value);
                }}
                placeholder="Describe Your Project"
                maxLength={5000}
                className="w-full bg-inherit p-2 outline-none placeholder:text-[#828282]"
                spellCheck="false"
              />
            </div>
          </div>
          {/* Project Budget checkbox  */}
          <div className="w-full border-b-[3px] py-4">
            <div>
              <h1 className="font-PolySansBulky text-3xl text-[#828282] md:text-5xl">
                My Project Budget Is (GHS)
              </h1>
            </div>
            {/* Radio checkboxes for the project type */}
            <div className="flex flex-col">
              <div className="flex flex-row space-x-2 py-4 text-sm md:space-x-4 md:text-lg">
                {/* rcbb */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", duration: 0.2 }}
                  className={`${
                    projectBudget === "Basic"
                      ? "flex flex-col items-center rounded-full bg-black text-white"
                      : "flex flex-col items-center rounded-full bg-white shadow"
                  }`}
                >
                  <label className="relative cursor-pointer select-none overflow-hidden px-6 py-3">
                    {/* //this input is hidden cos there is no appearance for it */}
                    <input
                      type="radio"
                      name="BudgetOptions"
                      value="Basic"
                      checked={projectBudget === "Basic"}
                      onChange={handleBudgetChange}
                      className="absolute -left-[999px] appearance-none"
                    />
                    <span data-text="Basic" className="text-lg">
                      1.5k - 3k
                    </span>
                  </label>
                </motion.div>
                {/* rcbe */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", duration: 0.2 }}
                  className={`${
                    projectBudget === "Advance"
                      ? "flex flex-col items-center rounded-full bg-black text-white"
                      : "flex flex-col items-center rounded-full bg-white shadow"
                  }`}
                >
                  <label className="relative cursor-pointer select-none overflow-hidden px-6 py-3">
                    {/* //this input is hidden cos there is no appearance for it */}
                    <input
                      type="radio"
                      name="BudgetOptions"
                      value="Advance"
                      className="absolute -left-[999px] appearance-none"
                      checked={projectBudget === "Advance"}
                      onChange={handleBudgetChange}
                    />
                    <span data-text="Advance" className="text-lg">
                      3k-6k
                    </span>
                  </label>
                </motion.div>
                {/* rcba */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", duration: 0.2 }}
                  className={`${
                    projectBudget === "Custom"
                      ? "flex flex-col items-center rounded-full bg-black text-white"
                      : "flex flex-col items-center rounded-full bg-white shadow"
                  }`}
                >
                  <label className="relative cursor-pointer select-none overflow-hidden px-6 py-3">
                    {/* //this input is hidden cos there is no appearance for it */}
                    <input
                      type="radio"
                      name="BudgetOptions"
                      value="Custom"
                      className="absolute -left-[999px] appearance-none"
                      checked={projectBudget === "Custom"}
                      onChange={handleBudgetChange}
                    />
                    <span data-text="Custom" className="text-lg">
                      {">"} 6k
                    </span>
                  </label>
                </motion.div>
              </div>
            </div>
          </div>
          {/* submit btn */}
          <div className="">
            <div className="my-4 flex flex-col py-2 text-center text-base md:flex-row md:items-center md:space-x-4">
              {complete ? (
                <motion.input
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", duration: 0.2 }}
                  id="submit"
                  type="submit"
                  value={SubmitBtn}
                  className=" flex w-full cursor-pointer select-none flex-col items-center rounded-full bg-black px-6 py-3 text-center text-xl leading-none text-white md:w-fit md:px-12 md:text-2xl"
                />
              ) : (
                <motion.input
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", duration: 0.2 }}
                  id="submit"
                  type="submit"
                  value={`Enter Details`}
                  disabled
                  className="flex w-full cursor-not-allowed select-none flex-col items-center rounded-full bg-black px-6 py-3 text-xl leading-none text-white opacity-70 md:w-fit md:px-12 md:text-2xl"
                />
              )}
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
            {SubmitBtn === "Message Submitted" && (
              <div className="flex flex-row items-center space-x-2 text-center md:text-start">
                <h1 className="text-lg">
                  <span className="text-[#828282]">Save This Your Unique </span>
                  <span className="text-[#828282]">Message Id: </span>
                  <span
                    className="select-text underline"
                    onClick={copyToClipBoard}
                  >
                    {senderID}
                  </span>
                  <span className="px-2">
                    {copied && (
                      <span className="text-base text-[#828282] underline decoration-[#828282]">
                        copied
                      </span>
                    )}
                  </span>
                </h1>
              </div>
            )}
          </div>
        </form>
      </div>
      {/* footer */}
      <div className="inset-0 flex flex-col overflow-hidden  bg-[#f7f2f2] font-PolySansNeutral ">
        {/* Contact section */}
        <div className=" relative z-40 flex h-full flex-col  overflow-x-hidden">
          <div className="absolute inset-0 -z-10 bg-[url(/Assets/img/grid.svg)] bg-center [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0))]"></div>
          <div className="flex flex-col items-end justify-end">
            <div className="flex flex-col">
              <div className=" h-[200px] w-[200px] justify-end overflow-hidden opacity-40 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] md:-bottom-4 md:-right-2  md:opacity-100">
                <div className="relative h-full w-full ">
                  <Image
                    src={memojiStand}
                    alt="iamjulius"
                    fill
                    sizes="200px"
                    className="absolute object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
          {/* footer */}
          <div className=" inset-0 z-40 flex flex-col font-PolySansNeutral">
            <div className="flex flex-row items-center justify-start px-4 py-2">
              <div className="">
                <h1 className="flex flex-row items-center text-gray-500">
                  <span className="text-xl leading-none">©</span>
                  <span>
                    <Link href="https://twitter.com/iamjulius_e">
                      <span className="text-black hover:text-[#1D9BF0]">
                        Julius Baffour Eghan
                      </span>
                    </Link>
                  </span>
                  <span>2022.</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
