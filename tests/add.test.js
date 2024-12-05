import add from "../src/add";

describe("Calculates the sum of two numbers", () => {
  test("Two integers", () => {
    expect(add(1, 3)).toEqual(4);
  });
  test("Integer and decimal", () => {
    expect(add(4, 2.5)).toEqual(6.5);
  });
  test("Two decimals", () => {
    expect(add(5.5, 4.5)).toEqual(10.0);
  });
  test("Positive and negative", () => {
    expect(add(6, -1)).toEqual(5);
  });
  test("Zero and positive", () => {
    expect(add(0, 12)).toEqual(12);
  });
  test("Zero and negative", () => {
    expect(add(0, -8)).toEqual(-8);
  });
});
