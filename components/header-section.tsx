import Image from "next/image";
import Link from "next/link";

export default function MainHeader({
  content,
  textSize,
}: {
  content: string;
  textSize: string;
}) {
  return (
    <div className="relative">
      <div className="absolute inset-0 z-10 bg-[url(/Assets/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      {/* Hero section */}
      <div className="border-b-[3px] px-4 pt-24 pb-4">
        <h1
          className={`font-PolySansBulky leading-none text-[#828282]/40 ${textSize}`}
        >
          {content}
        </h1>
      </div>
    </div>
  );
}
