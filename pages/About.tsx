import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Instagram, Twitter } from "react-feather";
import MainHeader from "../components/header-section";
import ParallaxText from "../components/paralaxScroll";
import myPicture from "../public/Assets/img/me/Julius_Eghan.jpg";
import memojicall from "../public/Memoji-Call.png";
import behanceLogo from "../public/Assets/img/behance-logo.svg";

export default function About() {
  const WorkNumbers = [
    { id: 1, number: 10, text1: "Projects", text2: "completed" },
    { id: 2, number: 8, text1: "Satisfied", text2: "Clients" },
    { id: 3, number: 2.6, text1: "Years Of", text2: "Experience" },
  ];

  const Socials = [
    {
      id: 1,
      name: "Twitter",
      icon: <Twitter size={24} strokeWidth={3} />,
      link: "https://twitter.com/iamjulius_e",
    },
    {
      id: 2,
      name: "Instagram",
      icon: <Instagram size={24} strokeWidth={3} />,
      link: "https://www.instagram.com/juliuseghan_/",
    },
    {
      id: 3,
      name: "Behance",
      icon: (
        <span className="h-[28px] w-[28px]">
          <Image src={behanceLogo} alt="behance-logo" className="" />
        </span>
      ),
      link: "https://www.behance.net/iamjulius",
    },
  ];

  return (
    <div className="bg-[#f7f2f2] font-PolySansBulky">
      {/* head */}
      <Head>
        <title>Julius - About</title>
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
      <MainHeader content="About Me" textSize="md:text-[108px] text-5xl" />
      {/* About Me - Personal  */}
      <div className="">
        <div className="flex flex-col border-b-[3px] py-10 px-4 md:flex-row">
          <div className="flex flex-1 flex-col items-start  px-4">
            <div className="relative w-full rounded-lg border-2 object-cover p-1">
              <Image
                src={myPicture}
                alt="Julius B Eghan"
                className="h-[300px] rounded object-cover md:h-[550px]"
                priority
              />
            </div>
          </div>
          <div className="flex flex-1 flex-col items-center justify-end px-2 py-4 md:items-start">
            {/* aboutMe */}
            <div className="text-center md:text-start">
              <h1 className="font-PolySansBulky text-3xl text-[#828282]/40 md:text-5xl">
                I'm{" "}
                <span className="capitalize text-[#828282]">
                  Julius Baffour Eghan
                </span>
                . A{" "}
                <span className="capitalize text-[#828282]">
                  Front-end Developer
                </span>{" "}
                from <span className="text-[#828282]">Ghana</span>.
              </h1>
              <div className="flex flex-col items-center justify-center space-y-4 py-6 text-2xl md:flex-row md:justify-start md:space-y-0 md:space-x-4">
                {Socials.map((s) => (
                  <div
                    key={s.id}
                    className="text-[#828282] underline decoration-[#828282] hover:text-black hover:decoration-black"
                  >
                    <Link
                      href={s.link}
                      className="flex flex-row items-center space-x-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>{s.icon}</span>
                      <h1 className="capitalize ">{s.name}</h1>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            {/* The Achievements */}
            <div>
              <div className="flex flex-row items-center space-x-4 ">
                {WorkNumbers.map((w) => (
                  <div
                    key={w.id}
                    className="flex flex-col items-start justify-start text-[#828282]/40"
                  >
                    <h1 className="flex flex-row text-5xl md:text-6xl ">
                      <span className="text-[#828282]">{w.number}</span>
                      <span className="">+</span>
                    </h1>
                    <h2 className="flex flex-col font-PolySansBulky text-base uppercase  leading-none md:px-2 md:text-xl">
                      <span>{w.text1}</span>
                      <span className="text-[#828282]">{w.text2}</span>
                    </h2>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About Me - Work */}
      <div className="">
        <div
          id="AboutMe"
          className="flex flex-col items-center px-8 py-10 md:px-52 md:py-20"
        >
          <div>
            <h1 className="text-center font-PolySansBulky text-3xl text-[#828282]/60 md:text-5xl">
              I <span className="text-[#828282]">Manage</span>,{" "}
              <span className="text-[#828282]">Design & Develop Websites </span>
              and <span className="text-[#828282]">Apps</span>. I{" "}
              <span className="text-[#828282]">
                Redesign & Redevelop Websites{" "}
              </span>{" "}
              For <span className="text-[#828282]">Existing Brands </span> and{" "}
              <span className="text-[#828282]">Agencies</span>. I help Brands{" "}
              <span className="text-[#828282]">Build Trust</span> And{" "}
              <span className="text-[#828282]">Identity</span>. With My Team at{" "}
              <span className="text-[#828282] underline decoration-[#828282] hover:text-black hover:decoration-black">
                <Link href="https://www.webncos.com/">Webncos</Link>
              </span>{" "}
              We Make Our Clients{" "}
              <span className="text-[#828282]">Stand Out</span>.
            </h1>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center md:flex-row md:space-x-10">
          <div className="flex flex-col items-center pb-6 md:pb-16">
            <div className="group">
              <Link
                href="/Assets/files/Julius-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h1 className="font-PolySansBulky text-3xl text-[#828282] underline decoration-[#828282] group-hover:text-black group-hover:decoration-black md:text-4xl">
                  Get My Resume
                </h1>
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center pb-16">
            <div className="group">
              <Link
                href="/Assets/files/Julius-Cover-letter.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h1 className="font-PolySansBulky text-3xl text-[#828282] underline decoration-[#828282] group-hover:text-black group-hover:decoration-black md:text-4xl">
                  Get My Cover Letter
                </h1>
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t-[3px] py-2 md:py-4">
          <ParallaxText baseVelocity={0.5}>
            <div className="flex select-none flex-row space-x-8 px-4 text-[#828282]/40 md:space-x-16 md:px-6">
              <h1>Typescript</h1>
              <h1>Next Js</h1>
              <h1>React Js</h1>
              <h1>HTML</h1>
              <h1>CSS</h1>
              <h1>React Native</h1>
              <h1>Swift</h1>
              <h1>Figma</h1>
              <h1>Framer Motion</h1>
              <h1>Adobe Illustrator</h1>
            </div>
          </ParallaxText>
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
                    priority={true}
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
                  <span className="px-2">
                    <Link href="/Audience" className="hover:underline">
                      Hidden - Designs
                    </Link>
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
