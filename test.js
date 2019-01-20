import test from "ava";
import conversion from "./lib/conversion";

test("conversion", t => {
  // Test data from Wikipedia: https://en.wikipedia.org/wiki/Roman_numerals#Middle_Ages_and_Renaissance
  const data = {
    1: "I",
    5: "V",
    10: "X",
    50: "L",
    100: "C",
    500: "D",
    1000: "M"
  };

  Object.entries(data).forEach(([key, value]) => {
    t.deepEqual(value, conversion.toRomanNumeral(key));
  });
});
