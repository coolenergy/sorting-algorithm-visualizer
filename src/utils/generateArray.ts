export default function generateArray(numberOfElements: number): number[] {
  const array: number[] = [];
  for (let i = 0; i < numberOfElements; i++) {
    const randomNumber = Math.ceil(Math.random() * numberOfElements);
    array.push(randomNumber);
  }
  return array;
}