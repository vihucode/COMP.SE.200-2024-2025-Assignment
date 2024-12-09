import filter from "../src/filter";

const products = [
  { name: "Organic honey", inStock: true },
  { name: "Spelt bread", inStock: true },
  { name: "Apple sauce", inStock: false },
  { name: "Rye bread", inStock: false },
];

describe("Filters elements that match criteria", () => {
  describe("When input array contains objects", () => {
    test("Returns in stock products", () => {
      expect(filter(products, ({ inStock }) => inStock)).toEqual([
        { name: "Organic honey", inStock: true },
        { name: "Spelt bread", inStock: true },
      ]);
    });
    test("Returns products that contain word 'bread'", () => {
      expect(
        filter(products, (product) => product.name.includes("bread"))
      ).toEqual([
        { name: "Spelt bread", inStock: true },
        { name: "Rye bread", inStock: false },
      ]);
    });
  });

  describe("When input array contains numbers", () => {
    test("Returns positive numbers", () => {
      expect(filter([0, 5, -3, 10, 2, 1, -9], (number) => number > 0)).toEqual([
        5, 10, 2, 1,
      ]);
    });
    test("Returns positive numbers and zeros", () => {
      expect(filter([0, 5, -3, 10, 2, 1, -9], (number) => number >= 0)).toEqual(
        [0, 5, 10, 2, 1]
      );
    });
    test("Returns negative numbers", () => {
      expect(filter([0, 5, -3, 10, 2, 1, -9], (number) => number < 0)).toEqual([
        -3, -9,
      ]);
    });
    test("Returns negative numbers and zeros", () => {
      expect(filter([0, 5, -3, 10, 2, 1, -9], (number) => number <= 0)).toEqual(
        [0, -3, -9]
      );
    });
    test("Returns even numbers", () => {
      expect(
        filter([0, 5, -3, 10, 2, 1, -9], (number) => number % 2 === 0)
      ).toEqual([0, 10, 2]);
    });
    test("Returns odd numbers", () => {
      expect(
        filter([0, 5, -3, 10, 2, 1, -9], (number) => number % 2 !== 0)
      ).toEqual([5, -3, 1, -9]);
    });
  });
});
