import capitalize from "../src/capitalize";

describe("Capitalizes the first letter of input string", () => {
  test("When string is lower case", () => {
    expect(capitalize("carrot")).toEqual("Carrot");
  });
  test("When string is upper case", () => {
    expect(capitalize("CARROT")).toEqual("Carrot");
  });
  test("When the first letter is already upper case", () => {
    expect(capitalize("Carrot")).toEqual("Carrot");
  });
  test("When string is mixed case", () => {
    expect(capitalize("caRRoT")).toEqual("Carrot");
  });
  test("When string is empty", () => {
    expect(capitalize("")).toEqual("");
  });
});
