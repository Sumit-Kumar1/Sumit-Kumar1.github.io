import Image from "next/image";

export default function Card(props) {
  return (
    <div class="inline-block px-3">
      <div class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out text-black text-justify grid p-5 grid-flow-row">
        <div className="h-2/3">{props.icon}</div>
        <h1 className="text-2xl font-bold">{props.Text}</h1>
        <p>{props.Desc}</p>
      </div>
    </div>
  );
}