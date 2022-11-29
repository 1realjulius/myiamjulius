import type { NextPage } from "next";
import Head from "next/head";
import MainHome from "../components/mainHome";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center font-PolySansNeutral">
      <Head>
        <title>Julius B. Eghan</title>
        <meta
          name="description"
          content="Website and Software Developer from Ghana."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.iamjulius.com/" />
        <meta
          property="og:title"
          content="Julius B. Eghan — Website and Software Developer"
        />
        <meta
          property="og:description"
          content="Website and Software Developer from Ghana."
        />
        <meta property="og:image" content="/Memoji-fav.svg" />
        {/* Favicon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/Memoji-fav.svg" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link rel="shortcut icon" href="/Memoji-fav.svg" />
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
      <div>
        <MainHome />
      </div>
    </div>
  );
};

export default Home;
