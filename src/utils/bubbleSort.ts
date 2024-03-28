import delay from "./delay";

export default async function bubbleSort(bars: Bar[], setBars?: React.Dispatch<React.SetStateAction<Bar[]>>) {
  const array = [...bars];
  const length = array.length;
  let swaped: boolean;
  let iterations = 0;
  do {
    swaped = false;
    for (let i = 0; i < length - iterations - 1; i++) {
      if (array[i].value <= array[i + 1].value) continue;
      const temp = array[i];
      array[i] = array[i + 1];
      array[i + 1] = temp;
      swaped = true;
    }
    iterations++;
  } while (swaped);
  setBars && setBars(array);
  return array;
}
