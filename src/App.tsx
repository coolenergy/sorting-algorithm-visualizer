import { useState, createContext } from 'react';
import makeBars from './utils/makeBars';
import Header from './components/Header';
import bubbleSort from './utils/bubbleSort';

export const barsContext = createContext<Bar[] | null>(null);
export const setBarsContext = createContext<React.Dispatch<React.SetStateAction<Bar[]>> | null>(null);

function App() {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState('bubble-sort');
  const [bars, setBars] = useState(makeBars(50));
  function sort(bars: Bar[] | null) {
    if (bars === null) return;
    switch(selectedAlgorithm) {
      case "bubble-sort":
        bubbleSort(bars, setBars);
        break;
      default:
        console.log("Algorithm is not yet implemented");
        break;
    }
  }

  return (
    <barsContext.Provider value={bars}>
      <setBarsContext.Provider value={setBars}>
        <Header selectedAlgorithm={selectedAlgorithm} setSelectedAlgorithm={setSelectedAlgorithm} sort={sort} />
        <main className="h-[70vh] text-slate-50 flex justify-center">
          {bars.map(bar => bar.element)}
        </main>
      </setBarsContext.Provider>
    </barsContext.Provider>
  )
}

export default App
