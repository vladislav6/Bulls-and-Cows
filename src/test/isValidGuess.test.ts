import { describe, expect, it } from 'vitest';
import { isValidGuess } from '../core/isValidGuess';

describe("isValidGuess", () => {
  it("should validate length", () => {
    expect(isValidGuess('abced', 6, 16)).toBeFalsy();
  });
});