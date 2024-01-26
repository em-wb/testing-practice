const {
  capitalise,
  reverseString,
  calculator,
  ceaserCipher,
} = require("./main");
const { add, subtract, divide, multiply } = calculator();

test("capitalise", () => {
  expect(capitalise("george")).toBe("George");
});

test("reverse string", () => {
  expect(reverseString("george")).toBe("egroeg");
});

test("calculator adds", () => {
  expect(add(3, 2)).toEqual(5);
});

test("calculator subtracts", () => {
  expect(subtract(3, 2)).toEqual(1);
});

test("calculator divides", () => {
  expect(divide(3, 2)).toEqual(1.5);
});

test("calculator multiply", () => {
  expect(multiply(3, 2)).toEqual(6);
});

test("ceaser cipher output", () => {
  expect(ceaserCipher("hello there", 3)).toBe("khoor wkhuh");
  expect(
    ceaserCipher(
      "abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      10
    )
  ).toBe("klmnopqrstuvwxyzabcdefghij!@#$%^&*()KLMNOPQRSTUVWXYZABCDEFGHIJ");
});
