import { describe, expect, it } from "vitest";
import { evaluateSecret } from '../core/evaluateSecret';

describe("evaluateSecret", () => {
  it("should match guess chars wiht secret in upper case", () => {
    expect(evaluateSecret('absed', 'ABSED')).toEqual({bulls: 5, cows: 5});
  });
});