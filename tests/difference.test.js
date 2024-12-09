import difference from "../src/difference";

describe("Returns items that appear in the first input array only", () => {
  test("When there is one differing element", () => {
    expect(difference(["blueberries", "bilberries"], ["blueberries"])).toEqual([
      "bilberries",
    ]);
  });
  test("When there are two differing elements", () => {
    expect(
      difference(
        ["blueberries", "bilberries", "lingonberries"],
        ["blueberries"]
      )
    ).toEqual(["bilberries", "lingonberries"]);
  });
  test("Does not return differing elements from the second array", () => {
    expect(
      difference(["bilberries"], ["bilberries", "lingonberries"])
    ).not.toContain("lingonberries");
  });
  test("Returns an empty array when arrays contain the same items", () => {
    expect(
      difference(
        ["strawberries", "raspberries"],
        ["raspberries", "strawberries"]
      )
    ).toEqual([]);
  });
});
