import Image from "next/image";
import Link from "next/link";
import memoji from "../public/Memoji-Call.png";

export default function Footer() {
  return (
    <div className="inset-0 flex flex-col  overflow-hidden border-t-[3px] bg-[#f7f2f2] font-PolySansNeutral ">
      {/* Contact section */}
      <div className=" relative z-40 flex flex-col overflow-hidden">
        <div className=" absolute -bottom-0 -right-16 z-10 h-[250px] w-[250px] overflow-hidden opacity-40 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] md:-bottom-4 md:-right-2  md:opacity-100">
          <div className="relative h-full w-full ">
            <Image
              // src="/Assets/img/me/Memoji-Call.png"
              src={memoji}
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
              <span>Mind.</span>
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
  );
}
