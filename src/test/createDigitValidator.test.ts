import { describe, expect, it } from 'vitest';
import { createDigitValidator } from '../core/createDigitValidator';

describe("createDigitValidator", () => {
  it ("should return function", () => {
    expect(typeof createDigitValidator(2)).toEqual('function');
  });

  it("should check binary chars", () => {
    const checkDigit = createDigitValidator(2);
    expect(checkDigit('0')).toEqual(0);
    expect(checkDigit('1')).toEqual(1);
    expect(checkDigit('2')).toBeNaN();
  });

  it("should check octal chars", () => {
    const checkDigit = createDigitValidator(8);
    expect(checkDigit('0')).toEqual(0);
    expect(checkDigit('7')).toEqual(7);
    expect(checkDigit('8')).toBeNaN();
  });
});