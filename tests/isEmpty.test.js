import isEmpty from "../src/isEmpty";

describe("Check if object is empty", () => {
  test("Returns false when input is a string", () => {
    expect(isEmpty("carrot")).toBe(false);
  });
  test("Returns true when input is an empty string", () => {
    expect(isEmpty("")).toBe(true);
  });
  test("Returns false when input is an array", () => {
    expect(isEmpty([10, 11, 12])).toBe(false);
  });
  test("Returns true when input is an empty array", () => {
    expect(isEmpty([])).toBe(true);
  });
  test("Returns false when input is an object", () => {
    expect(isEmpty({ product: "apple sauce", quantity: 2 })).toBe(false);
  });
  test("Returns true when input is an empty object", () => {
    expect(isEmpty({})).toBe(true);
  });
  test("When input is a number", () => {
    expect(isEmpty(20)).toBe(true);
  });
});
