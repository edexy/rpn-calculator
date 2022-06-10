import { calculate } from "./index";

test("empty expression", () => {
  expect(calculate("")).toEqual(0);
});

test("20 5 /", () => {
  expect(calculate("20 5 /")).toBe(4);
});

test("5 3 -", () => {
  expect(calculate("5 3 -")).toBe(2);
});

test("4 2 + 3 -", () => {
  expect(calculate("4 2 + 3 -")).toBe(3);
});

// 3 5 8 * 7 + * => ((5*8)+7)*3 = 141
test("3 5 8 * 7 + *", () => {
  expect(calculate("3 5 8 * 7 + *")).toBe(141);
});
