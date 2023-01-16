import Image from "next/image";
import Link from "next/link";
import ntemp1 from "../public/Assets/img/ntemp/fwdp-thumbnal.png";
import ntemp2 from "../public/Assets/img/ntemp/cooc-thumbnal.png";
import ntemp3 from "../public/Assets/img/ntemp/i-thumbnal.png";
import ntemp4 from "../public/Assets/img/ntemp/csa-thumbnal.png";
import ntemp5 from "../public/Assets/img/ntemp/fc-thumbnal.png";
import project1 from "../public/Assets/img/projects/webncos-project-img.jpg";
import project2 from "../public/Assets/img/projects/photocos-project-img.png";
import memojiStand from "../public/Memoji-Call.png";
import Head from "next/head";
import MainHeader from "../components/header-section";
import Copytext from "../components/copyright-component";

export default function Projects() {
  const notionTemplates = [
    {
      id: 1,
      name: "Freelance Web Dev Pack 01",
      price: 0,
      type: "productivity",
      img: ntemp1,
      link: "https://notioncheck.gumroad.com/l/fwdp1",
    },
    {
      id: 2,
      name: "Client On & Off-boarding Checklist",
      price: 0,
      type: "productivity",
      img: ntemp2,
      link: "https://notioncheck.gumroad.com/l/coaofbc",
    },
    {
      id: 3,
      name: "Business Invoice",
      price: 0,
      type: "productivity",
      img: ntemp3,
      link: "https://notioncheck.gumroad.com/l/bi",
    },
    {
      id: 4,
      name: "Client Service Agreement",
      price: 0,
      type: "productivity",
      img: ntemp4,
      link: "https://notioncheck.gumroad.com/l/csa",
    },
    {
      id: 5,
      name: "Freelance Workspace Checklist-01",
      price: 0,
      type: "productivity",
      img: ntemp5,
      link: "https://notioncheck.gumroad.com/l/lnsqi",
    },
  ];

  const Projects = [
    {
      id: 1,
      projectName: "Webncos",
      projectDescription:
        "Professional Website Branding, Development and Management Agency.",
      projectType: "Website",
      projectCat: "Agency",
      projectImage: project1,
      img: "../public/Assets/img/projects/webncos-project-img.jpg",
      ProjectLink: "www.webncos.com/",
    },
    {
      id: 2,
      projectName: "Photocos",
      projectDescription: "Professional Photography & Videography Agency.",
      projectType: "Website",
      projectCat: "Agency",
      projectImage: project2,
      img: "../public/Assets/img/projects/photocos-project-img.png",
      ProjectLink: "photocos-agency.vercel.app/",
    },
  ];
  return (
    <div className="bg-[#f7f2f2] font-PolySansNeutral text-black">
      {/* head */}
      <Head>
        <title>Julius - Projects</title>
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
        content="Recent Projects"
        textSize="md:text-[108px] text-5xl"
      />
      {/* templates section */}
      <div className=" border-b-[3px] px-4">
        <div className="pt-8">
          <h1 className="font-PolySansBulky text-3xl text-[#828282]/50 md:text-5xl">
            <span className="">Notion </span>
            <span className="text-[#828282]">Templates </span>
          </h1>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
            {notionTemplates.map((n: any) => (
              <div key={n.id} className="rounded-lg bg-white p-2 shadow-md">
                <div>
                  <Image
                    src={n.img}
                    alt="iamjulius"
                    width="300"
                    height="300"
                    className="rounded-lg object-cover"
                  />
                </div>
                <div className="py-2">
                  <Link href={n.link} target="_blank" rel="noopener noreferrer">
                    <h1 className="truncate font-PolySansBulky text-xl underline">
                      {n.name}
                    </h1>
                  </Link>
                  <h1 className="pt-1 text-[#828282]">
                    <span>${n.price}/</span>
                    <span>{n.type}</span>
                  </h1>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-end justify-end pt-4">
            <div className=" group flex flex-col items-end justify-end">
              <Link
                href="https://notioncheck.gumroad.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h1 className="font-PolySansBulky text-2xl text-[#828282] underline decoration-[#828282] group-hover:text-black group-hover:decoration-black md:text-4xl">
                  view More
                </h1>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* main Projects section */}
      <div className="space-y-6 px-4 py-10 md:px-10 md:py-16">
        <div>
          <h1 className="font-PolySansBulky text-3xl text-[#828282]/50 md:text-5xl">
            <span className="">Recent </span>
            <span className="text-[#828282]">Projects</span>
          </h1>
        </div>
        <div className="">
          <div className="grid gap-6 md:grid-cols-3">
            {Projects.map((p: any) => (
              <div key={p.id} className="my-2 rounded-2xl bg-white p-6 shadow">
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
                    <Link href={`https:/${p.ProjectLink}`}>
                      <h1 className="font-PolySansBulky text-xl underline">
                        View Live
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
      </div>
      <div className="inset-0 flex flex-col  overflow-hidden border-t-[3px] bg-[#f7f2f2] font-PolySansNeutral ">
        {/* Contact section */}
        <div className=" relative z-40 flex flex-col overflow-hidden">
          <div className=" absolute bottom-0 right-0 flex flex-col items-end justify-end">
            <div className="flex flex-col">
              <div className="h-[200px] w-[200px] justify-end overflow-hidden opacity-40 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] md:-bottom-4 md:-right-2  md:opacity-100">
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
                    <h1 className="font-PolySansBulky text-3xl text-[#828282] group-hover:text-black md:text-5xl ">
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
                <h1>
                  <Copytext />
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
