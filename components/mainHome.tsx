import Image from "next/image";
import Link from "next/link";

import project1 from "../public/Assets/img/projects/webncos-project-img.jpg";
import project2 from "../public/Assets/img/projects/photocos-project-img.png";
import hand from "../public/Assets/img/hand.png";
import myPicture from "../public/Assets/img/me/Julius_Eghan.jpg";
import memojiStand from "../public/Assets/img/me/Memoji-Stand.png";
import memojicall from "../public/Memoji-Call.png";
import { motion } from "framer-motion";

export default function MainHome() {
  const Projects = [
    {
      id: 1,
      projectName: "Webncos",
      projectDescription:
        "Professional Website Branding, Development and Management Agency.",
      projectType: "Website",
      projectCat: "Agency",
      projectImage: project1,
      ProjectLink: "www.webncos.com/",
      style: "",
    },
    {
      id: 2,
      projectName: "Photocos",
      projectDescription: "Professional Photography & Videography Agency.",
      projectType: "Website",
      projectCat: "Agency",
      projectImage: project2,
      ProjectLink: "photocos-agency.vercel.app/",
      style: "",
    },
  ];
  return (
    <div className="min-h-screen min-w-full select-none bg-[#f7f2f2] py-0">
      <div className="flex flex-col">
        {/* hero section */}
        <div className="relative h-[90vh] w-full overflow-hidden  border-b-[3px] md:h-[70vh]">
          <div className="absolute inset-0 bg-[url(/Assets/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
          <div className=" absolute bottom-0 -right-20 z-10 h-[300px] w-[300px] overflow-hidden opacity-40 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] md:h-[450px] md:w-[450px] md:opacity-100">
            <div className="relative h-full w-full ">
              <Image
                src={memojiStand}
                alt="iamjulius"
                fill
                className="absolute object-cover"
                priority
              />
            </div>
          </div>
          <div className="absolute bottom-6 z-20  select-none px-6 font-PolySansBulky leading-none">
            <h1 className="flex flex-row items-center space-x-2 text-3xl text-[#828282]/60 md:text-5xl">
              <span>Hey There,</span>
              <span className="rotate-45 animate-wiggle">
                <Image
                  src={hand}
                  alt="hand"
                  width="30"
                  height="30"
                  priority
                  className="h-[30px] w-[30px] md:h-[52px] md:w-[52px] "
                />
              </span>
            </h1>
            <h1 className="pt-2 text-3xl text-[#828282]/60 md:text-5xl ">
              <span>I am </span>
              <Link href="/About" className="group">
                <span className=" text-[#828282] underline decoration-[#828282] group-hover:text-black group-hover:decoration-black">
                  <span>Julius,</span>
                </span>
              </Link>
              <span> I make,</span>
            </h1>
            <h1 className="text-[72px] leading-none md:text-[90px]">
              <span>Websites, </span>
              <span>Apps, </span>
              <br className="flex" />
              <span>& Brand Assets.</span>
            </h1>
          </div>
        </div>
        {/* hero aboutme */}
        <div className="border-b-[3px] px-6 py-5 md:py-6">
          <h1 className="font-PolySansBulky text-3xl text-[#828282]/60 md:text-4xl">
            I <span className="text-[#828282]">Manage</span>,{" "}
            <span className="text-[#828282]">Design & Develop Websites </span>
            and <span className="text-[#828282]">Apps</span>. I help Brands{" "}
            <span className="text-[#828282]">Build Trust</span> And{" "}
            <span className="text-[#828282]">Identity</span>. With My Team at{" "}
            <span className="text-[#828282] underline decoration-[#828282] hover:text-black hover:decoration-black">
              <Link href="https://www.webncos.com/">Webncos</Link>
            </span>{" "}
            We Make Our Clients{" "}
            <span className="text-[#828282]">Stand Out</span>.{" "}
            <span className="text-[#828282] underline decoration-[#828282] hover:text-black hover:decoration-black">
              <Link href="/Contact">Tell Me About Your Project</Link>
            </span>
          </h1>
        </div>
        {/* Projects section */}
        <div className="space-y-4 p-4 py-10">
          <div>
            <h1 className="font-PolySansBulky text-3xl md:text-5xl">
              <span className="text-[#828282]">Recent </span>
              <Link href="/Projects" className="">
                <span className="text-[#828282] underline decoration-[#828282] hover:text-black hover:decoration-black">
                  Projects
                </span>
              </Link>
            </h1>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            {Projects.map((p) => (
              <div
                key={p.id}
                className={` ${p.style} my-2 rounded-2xl  bg-white p-3 shadow`}
              >
                <div className="rounded-2xl border-2 border-gray-300">
                  <Image
                    src={p.projectImage}
                    alt="project1"
                    priority
                    className="rounded-2xl"
                  />
                </div>
                <div className="p-2">
                  <div className="flex flex-row items-center justify-between">
                    <Link
                      href={{
                        pathname: `/Projects/${p.projectName}`,
                        query: {
                          name: p.projectName,
                          description: p.projectDescription,
                          type: p.projectType,
                          category: p.projectCat,
                          link: p.ProjectLink,
                        },
                      }}
                    >
                      <h1 className="font-PolySansBulky text-xl underline">
                        {p.projectName}
                      </h1>
                    </Link>
                    <Link
                      href={`https://${p.ProjectLink}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                    >
                      <h1 className="flex items-center space-x-2 font-PolySansBulky text-xl text-[#828282] underline group-hover:text-black">
                        <span className="">Visit Website </span>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="h-6 w-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                            />
                          </svg>
                        </span>
                      </h1>
                    </Link>
                  </div>
                  <h1 className="text-lg">{p.projectDescription}</h1>
                  <h1 className="text-base text-[#828282]">
                    <span>{p.projectType}/</span>
                    <span>{p.projectCat}</span>
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="inset-0 flex flex-col  overflow-hidden border-t-[3px] bg-[#f7f2f2] font-PolySansNeutral ">
          {/* Contact section */}
          <div className=" relative z-40 flex flex-col overflow-hidden">
            <div className=" absolute bottom-0 right-0 flex flex-col items-end justify-end">
              <div className="flex flex-col">
                <div className="h-[200px] w-[200px] justify-end overflow-hidden opacity-40 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] md:-bottom-4 md:-right-2  md:opacity-100">
                  <div className="relative h-full w-full ">
                    <Image
                      src={memojicall}
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
            <div className="absolute inset-0 -z-10 bg-[url(/Assets/img/grid.svg)] bg-center [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0))]"></div>
            <div className="z-10 flex flex-col p-4">
              <div>
                <h1 className="font-PolySansBulky text-6xl md:text-7xl">
                  <span className=" text-[#828282]/40">Have A Project In </span>
                  <span className="text-[#828282]">Mind?</span>
                </h1>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-col items-start justify-start py-2">
                  <div className="group">
                    <Link
                      href="/Contact"
                      className="underline decoration-[#828282] group-hover:decoration-black"
                    >
                      <h1 className="font-PolySansBulky text-3xl text-[#828282] group-hover:text-black md:text-5xl">
                        Tell Me About It
                      </h1>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* footer */}
            <div className=" inset-0 z-40 flex flex-col font-PolySansNeutral">
              <div className="flex flex-row items-center justify-between px-4 py-2">
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
    </div>
  );
}
