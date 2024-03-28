import generateArray from "./generateArray";
import { nanoid } from "nanoid";

function makeElement(value: number, sizeOfArray: number): JSX.Element {
  const height = Math.ceil((value / sizeOfArray) * 100);
  return (
    <div className="bg-gray-300 text-black border w-6" style={{height: `${height}%`}} key={nanoid()}>{value}</div>
  );
}

export default function makeBars(sizeOfArray: number): Bar[] {
  return generateArray(sizeOfArray).map((value, index) => {
    const element = makeElement(value, sizeOfArray);
    return {
      value,
      element,
      initialPosition: index,
      color: "red",
    }
  });
}