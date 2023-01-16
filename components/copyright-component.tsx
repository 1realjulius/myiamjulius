import Link from "next/link";

export default function Copytext() {
  //copyright date
  const now = new Date();
  let year = now.getFullYear();
  return (
    <div>
      <h1 className="text-gray-500">
        <span className="">Made with ❤️ by </span>
        <Link
          href="https://twitter.com/iamjulius_e"
          className="hover:underline"
        >
          <span className="">Julius Baffour Eghan </span>
        </Link>
        <span className="">©{year}</span>
      </h1>
    </div>
  );
}
