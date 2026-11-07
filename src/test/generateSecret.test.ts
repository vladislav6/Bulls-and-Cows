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

  it("should generate octal numbers with length 4", () => {
    const values = [0.1, 0.3, 0.5, 0.2];
    let index = 0;
    const random = () => values[index++];
    expect(generateSecret(4, 8, random)).toBe('0241');
  });

  it("should generate decimal numbers with length 3", () => {
    const values = [0.1, 0.3, 0.9];
    let index = 0;
    const random = () => values[index++];
    expect(generateSecret(3, 10, random)).toBe('139');
  });

  it("should generate hexadecimal numbers with length 6", () => {
    const values = [0.1, 0.3, 0.5, 0.2, 0.6, 0.9];
    let index = 0;
    const random = () => values[index++];
    expect(generateSecret(6, 16, random)).toBe('14839e');
  });
});
