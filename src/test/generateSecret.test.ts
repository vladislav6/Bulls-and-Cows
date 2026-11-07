import { describe, expect, it } from "vitest";
import { generateSecret } from "../core/generateSecret";

describe("generateSecret", () => {
  it("should be undefined with not correct length and base", () => {
    expect(generateSecret(7, 10)).toBeUndefined();
    expect(generateSecret(3, 2)).toBeUndefined();
    expect(generateSecret(4, 5)).toBeUndefined();
  });

  it("should generate binary numbers with length 2", () => {
    const values = [0.1, 0.5];
    let index = 0;
    const random = () => values[index++];
    expect(generateSecret(2, 2, random)).toBe('01');
  });
});
