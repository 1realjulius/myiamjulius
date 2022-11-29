import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import MainHeader from "../../components/header-section";

export default function page() {
  const router = useRouter();
  const { name } = router.query;
  const details = router.query;
  const description = details.description;
  const category = details.category;
  const type = details.type;
  const link = details.link;
  const [active, setActive] = useState("");

  useEffect(() => {
    if (name === "Webncos") {
      setActive("web");
    } else if (name === "Photocos") {
      setActive("pho");
    } else {
      setActive("pho");
    }
  }, []);

  return (
    <div className="bg-[#f7f2f2] font-PolySansNeutral">
      {/* head */}
      <Head>
        <title>Julius - {name}</title>
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
      <div className="text-center">
        <MainHeader
          content={`${name} Project.`}
          textSize="md:text-[108px] text-5xl"
        />
      </div>
      {/* Project section */}
      <div className="flex flex-col items-center px-4 py-10 md:px-16">
        <div className="my-4 rounded-lg border-[3px] p-1">
          {active === "web" ? (
            <Image
              src="/Assets/img/projects/webncos-project-img.jpg"
              width={300}
              height={300}
              alt="ProjectImg"
              className="rounded-lg"
              priority
            />
          ) : active === "pho" ? (
            <Image
              src="/Assets/img/projects/photocos-project-img.png"
              width={300}
              height={300}
              alt="ProjectImg"
              priority
              className="rounded-lg"
            />
          ) : (
            <Image
              src="/Assets/img/projects/webncos-project-img.jpg"
              width={300}
              height={300}
              alt="ProjectImg"
              className="rounded-lg"
            />
          )}
        </div>
        <div className="py-3">
          <h1 className="text-[#828282] md:text-lg">
            <span>{type}/ </span>
            <span>{category}</span>
          </h1>
        </div>
        <div className="py-4 md:px-56">
          <h1 className="text-center text-xl md:text-3xl">{description}</h1>
        </div>
        <div className="flex flex-col items-center pb-10">
          <div className="group">
            <Link
              href={`https:/${link}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h1 className="font-PolySansBulky text-2xl text-[#828282] underline decoration-[#828282] group-hover:text-black group-hover:decoration-black md:text-4xl">
                View Live {type}
              </h1>
            </Link>
          </div>
        </div>
      </div>
      <div className="inset-0 flex flex-col  overflow-hidden border-t-[3px] bg-[#f7f2f2] font-PolySansNeutral ">
        {/* Contact section */}
        <div className=" relative z-40 flex flex-col overflow-hidden">
          <div className=" absolute -bottom-0 -right-16 z-10 h-[250px] w-[250px] overflow-hidden opacity-40 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] md:-bottom-4 md:-right-2  md:opacity-100">
            <div className="relative h-full w-full ">
              <Image
                src="/Assets/img/me/Memoji-Call.png"
                alt="iamjulius"
                fill
                className="absolute object-cover"
                priority
              />
            </div>
          </div>
          <div className="absolute inset-0 -z-10 bg-[url(/Assets/img/grid.svg)] bg-center [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0))]"></div>
          <div className="z-10 flex flex-col p-4">
            <div>
              <h1 className="font-PolySansBulky text-6xl md:text-7xl">
                <span className=" text-[#828282]/40">Have A Project In </span>
                <span className="text-[#828282]">Mind.</span>
              </h1>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col items-start justify-start py-2">
                <div className="group">
                  <Link
                    href="/Contact"
                    className="underline decoration-[#828282] group-hover:decoration-black"
                  >
                    <h1 className="font-PolySansBulky text-4xl text-[#828282] group-hover:text-black md:text-6xl">
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
  );
}
