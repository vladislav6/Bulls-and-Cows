import { describe, expect, it } from 'vitest';
import { createDigitValidator } from '../core/createDigitValidator';

describe("createDigitValidator", () => {
  it ("should return function", () => {
    expect(typeof createDigitValidator(2)).toEqual('function');
  });
});