import ArraySizeForm from "./ArraySizeForm";
import AlgorithmSelect from "./AlgorithmSelect";

interface Props {
  selectedAlgorithm: string;
  setSelectedAlgorithm: React.Dispatch<React.SetStateAction<string>>;
  sort: (bars: Bar[] | null) => void;
}

export default function Header({ selectedAlgorithm, setSelectedAlgorithm, sort }: Props) {
  return (
    <header className="bg-sky-900 flex flex-col justify-center items-center flex-wrap gap-6 py-4 text-slate-100 text-xl shadow-2xl shadow-sky-900/50">
      <h1 className="text-center text-4xl font-coda font-bold text-slate-50">Sorting Algorithm Visualizer</h1>
      <div className="flex flex-col gap-4">
        <ArraySizeForm />
        <AlgorithmSelect selectedAlgorithm={selectedAlgorithm} setSelectedAlgorithm={setSelectedAlgorithm} sort={sort} />
      </div>
    </header>
  );
}