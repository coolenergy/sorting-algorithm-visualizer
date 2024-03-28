import { setBarsContext } from "../App";
import { useState, useContext } from "react";
import makeBars from "../utils/makeBars";

const MIN_ARRAY_SIZE = 5;
const MAX_ARRAY_SIZE = 100;

export default function ArraySizeForm() {
  const setBars = useContext(setBarsContext);
  const [arraySize, setArraySize] = useState(50);

  function changeArraySize(e: React.ChangeEvent<HTMLInputElement>) {
    setArraySize(parseInt(e.target.value));
  }

  function generateNewBars(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (setBars === null) return;
    // @ts-ignore
    const value = parseInt(e.target["array-size"].value);
    setBars(makeBars(value));
  }

  return (
    <form className="flex flex-wrap gap-4 justify-center" onSubmit={generateNewBars}>
      <div className="flex flex-col items-center">
        <label htmlFor="array-size">Adjust the size of the array:</label>
        <input
          className="text-black w-48"
          onChange={changeArraySize}
          type="range"
          name="array-size"
          id="array-size"
          min={MIN_ARRAY_SIZE}
          max={MAX_ARRAY_SIZE}
        />
        <span>{arraySize}</span>
      </div>
      <input
        className="bg-blue-500 h-fit px-4 py-2 text-white rounded-lg font-bold border border-transparent cursor-pointer shadow-lg shadow-blue-500/50 active:translate-y-0.5 hover:border-blue-300"
        type="submit"
        value="Generate"
      />
    </form>
  );
}
