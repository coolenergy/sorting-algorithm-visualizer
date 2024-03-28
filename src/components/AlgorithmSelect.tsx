import { useContext } from 'react';
import { barsContext } from "../App";

interface Props {
  selectedAlgorithm: string;
  setSelectedAlgorithm: React.Dispatch<React.SetStateAction<string>>;
  sort: (bars: Bar[] | null) => void;
}

export default function AlgorithmSelect({ selectedAlgorithm, setSelectedAlgorithm, sort }: Props) {
  const bars = useContext(barsContext);

  function selectOption(e: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedAlgorithm(e.target.value);
  }

  return (
    <div className="flex flex-wrap justify-center items-center gap-5">
      <label htmlFor="algorithms">Choose a sorting algorithm:</label>
      <select className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-lg" onChange={selectOption} value={selectedAlgorithm} name="algorithms" id="algorithms">
        <option value="bubble-sort">Bubble sort</option>
        <option value="selection-sort">Selection sort</option>
        <option value="merge-sort">Merge sort</option>
      </select>
      <button className="bg-blue-500 px-4 py-2 text-white rounded-lg font-bold border border-transparent shadow-lg shadow-blue-500/50 active:translate-y-0.5 hover:border-blue-300" onClick={() => sort(bars)}>Sort now</button>
    </div>
  );
}
