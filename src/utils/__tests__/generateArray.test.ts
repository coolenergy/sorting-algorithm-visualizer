import { describe, expect, it } from "vitest";
import generateArray from "../generateArray";

describe("generate array", () => {
  it("should generate an array of n random numbers", () => {
    expect(generateArray(100).length).toBe(100);
  })
  it("should be an array of numbers only", () => {
    expect(generateArray(100)
      .every(element => typeof element === "number"))
      .toBe(true);
  })
})