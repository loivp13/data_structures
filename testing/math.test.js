import add from "./math";

describe("testing import/export", () => {
  test("please pass", () => {
    expect(add(2, 1)).toBe(3);
  });
});
