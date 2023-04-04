const { shuffleArray } = require("./utils");

describe("shuffleArray should", () => {
  test("return an array", () => {
    const arr = [1, 2, 3, 4, 5];
    expect(Array.isArray(shuffleArray(arr))).toBe(true);
  });

  test("return an array of the same length as the input array", () => {
    const arr = [1, 2, 3, 4, 5];
    expect(shuffleArray(arr)).toHaveLength(arr.length);
  });

  test("shuffle the items in the array", () => {
    const arr = [1, 2, 3, 4, 5];
    const shuffled = shuffleArray(arr);
    expect(shuffled).not.toEqual(arr);
  });
});
