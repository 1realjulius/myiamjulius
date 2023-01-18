export default function Copytext() {
  //copyright date
  const now = new Date();
  let year = now.getFullYear();
  return (
    <div>
      <h1 className="text-gray-500">
        <span className="">©{year}</span>
        <span className="">Made with ❤️</span>
      </h1>
    </div>
  );
}
