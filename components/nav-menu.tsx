"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Instagram, Twitter } from "react-feather";

export default function NavMenu() {
  const [open, setOpen] = useState(false); // State to manage the full screen Menu.If false it is closed and if true it is opened
  const [menuBtnState, setMenuBtnState] = useState(false); // State to manage the hamburger Menu.If false it is closed and if true it is opened
  const [openBtn, setBtnOpen] = useState(false);

  const handleHanburgerManu = () => {
    if (!menuBtnState) {
      //open
      setMenuBtnState(true);
      setOpen(true);
      setBtnOpen(true);
    } else {
      //close
      setMenuBtnState(false);
      setOpen(false);
      setBtnOpen(false);
    }
  };
  const hideMenu = () => {
    if (open) {
      setOpen(false);
      setMenuBtnState(false);
      setBtnOpen(false);
    }
  };

  // setting up a magnetic btn for the hamburer menu

  return (
    <div className="z-40 flex w-full select-none overflow-hidden">
      <div className="flex flex-col items-center justify-center ">
        {/* Hanburger Manu Itself */}
        <div
          className={`navMen fixed top-3 right-3 z-40
            ${open ? "p-3" : "p-3"}
          `}
        >
          <div className="flex w-6 items-center justify-end">
            <div
              className="group flex h-6 w-6 cursor-pointer flex-col items-center justify-between"
              onClick={handleHanburgerManu}
            >
              {/* the btn */}
              <span
                className={`h-[2px] w-full transform cursor-pointer rounded-lg bg-black mix-blend-difference transition duration-300 ease-in-out 
                ${openBtn ? "translate-y-2.5 rotate-45 bg-[#000000]" : ""}
                `}
              />
              <span
                className={`h-[2px] w-full transform cursor-pointer rounded-lg bg-black mix-blend-difference transition duration-300  ease-in-out
                ${openBtn ? "w-0" : "w-full"}
                `}
              />
              <span
                className={`h-[2px] w-full transform  cursor-pointer rounded-lg bg-black mix-blend-difference transition duration-300 ease-in-out
                ${openBtn ? "-translate-y-3 -rotate-45 bg-[#000000]" : ""}
                `}
              />
            </div>
          </div>
        </div>
        {/* MainMenu */}
        <div className="">
          <AnimatePresence mode="sync">
            {open && (
              <div className="fixed top-0 right-0 z-30 min-h-screen w-full overflow-hidden  bg-white md:w-[30vw]">
                <motion.div
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -10, opacity: 0 }}
                  className="relative h-screen w-full"
                >
                  <div className="flex h-full flex-col justify-between font-PolySansNeutral">
                    {/* top */}
                    <div className=" relative z-40 flex h-40 flex-col justify-end overflow-hidden">
                      <div className="absolute inset-0 -z-10 bg-[url(/Assets/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
                      <div className=" inset-0 z-40 flex flex-col font-PolySansNeutral">
                        <div className="flex flex-col items-center justify-between px-4 py-2">
                          <div className=" flex flex-row items-center justify-center space-x-6">
                            <Link
                              href="https://twitter.com/iamjulius_e"
                              className="group"
                            >
                              <h1 className="rounded-full p-3 text-center font-PolySansBulky text-xl leading-none text-[#828282]/70 hover:text-black hover:shadow-lg">
                                <Twitter size={34} strokeWidth="2" />
                              </h1>
                            </Link>
                            <Link
                              href="https://www.instagram.com/juliuseghan_/"
                              className="group"
                            >
                              <h1 className="rounded-full p-3 text-center font-PolySansBulky text-xl leading-none text-[#828282]/70 hover:text-black hover:shadow-lg">
                                <Instagram size={34} strokeWidth="2" />
                              </h1>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* navlinks */}
                    <div className="flex flex-1 flex-col justify-center">
                      <div className="flex flex-col items-center justify-center space-y-8 text-6xl md:text-7xl">
                        {/* home Link */}
                        <div>
                          <Link
                            href="/"
                            onClick={hideMenu}
                            className="text-[#828282]/70 hover:text-black"
                          >
                            <h1 className="font-PolySansBulky hover:underline hover:decoration-black">
                              Home
                            </h1>
                          </Link>
                        </div>
                        {/* About Link */}
                        <div>
                          <Link
                            href="/About"
                            onClick={hideMenu}
                            className="text-[#828282]/70 hover:text-black"
                          >
                            <h1 className="font-PolySansBulky hover:underline hover:decoration-black">
                              About
                            </h1>
                          </Link>
                        </div>
                        {/* Projects Link */}
                        <div>
                          <Link
                            href="/Projects"
                            onClick={hideMenu}
                            className="text-[#828282]/70 hover:text-black"
                          >
                            <h1 className="font-PolySansBulky hover:underline hover:decoration-black">
                              Projects
                            </h1>
                          </Link>
                        </div>
                        {/* Contact Link */}
                        <div>
                          <Link
                            href="/Contact"
                            onClick={hideMenu}
                            className="text-[#828282]/70 hover:text-black"
                          >
                            <h1 className="font-PolySansBulky hover:underline hover:decoration-black">
                              Contact
                            </h1>
                          </Link>
                        </div>
                        {/* Contact Link */}
                        <div>
                          <Link
                            href="#"
                            onClick={hideMenu}
                            className="text-[#828282]/70 hover:text-black"
                          >
                            <h1 className="font-PolySansBulky hover:underline hover:decoration-black">
                              Blog
                            </h1>
                          </Link>
                        </div>
                      </div>
                    </div>
                    {/* down */}
                    <div className=" relative z-40 flex h-40 flex-col justify-start overflow-hidden">
                      <div className="absolute inset-0 -z-10 bg-[url(/Assets/img/grid.svg)] bg-center [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0))]"></div>
                      <div className=" inset-0 z-40 flex flex-col font-PolySansNeutral">
                        <div className="flex flex-col items-center justify-between px-4 py-2">
                          <div className=" flex flex-col items-center justify-center">
                            <h1 className="pt-10 text-center font-PolySansBulky text-lg leading-none text-[#828282]/40">
                              ©iamjulius2022
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
