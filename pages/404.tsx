import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import MainHeader from "../components/header-section";

export default function custom404() {
  return (
    <div className="flex h-screen w-full flex-col bg-[#f7f2f2] font-PolySansNeutral">
      {/* head */}
      <Head>
        <title>Julius - 404</title>
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
      <div className="relative flex h-full w-full flex-col justify-between">
        {/* header */}
        <div>
          <MainHeader
            content="// This Page Does Not Exist"
            textSize="md:text-[40px] text-3xl"
          />
        </div>
        <div className="text-center">
          <h1 className="font-PolySansBulky text-3xl md:text-6xl">404</h1>
          <div className="group">
            <Link href="/">
              <h1 className="font-PolySansBulky text-xl text-[#828282] underline decoration-[#828282] group-hover:text-black group-hover:decoration-black md:text-3xl">
                Go Back
              </h1>
            </Link>
          </div>
        </div>
        <div className="inset-0 flex flex-col overflow-hidden  bg-[#f7f2f2] font-PolySansNeutral ">
          {/* Contact section */}
          <div className=" relative z-40 flex h-48 flex-col justify-end overflow-hidden">
            <div className=" absolute -bottom-0 -right-16 z-10 h-[200px] w-[200px] overflow-hidden opacity-40 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] md:-bottom-4 md:-right-2  md:opacity-100">
              <div className="relative h-full w-full ">
                <Image
                  src="/Assets/img/me/Memoji-404.png"
                  alt="iamjulius"
                  fill
                  priority
                  sizes="200px"
                  className="absolute object-cover"
                />
              </div>
            </div>
            <div className="absolute inset-0 -z-10 bg-[url(/Assets/img/grid.svg)] bg-center [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0))]"></div>
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
