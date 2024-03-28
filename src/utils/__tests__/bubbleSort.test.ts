import { describe, expect, it } from "vitest";
import makeBars from "../makeBars";
import bubbleSort from "../bubbleSort";

describe("sorting", () => {
  const unsortedBars = makeBars(100);
  const sortedArray = [...unsortedBars].sort((a, b) => a.value - b.value);

  it("should sort the input array", async () => {
    expect(await bubbleSort(unsortedBars)).toStrictEqual(sortedArray);
  })
})
