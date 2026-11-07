import { describe, expect, it } from "vitest";
import { evaluateSecret } from '../core/evaluateSecret';

describe("evaluateSecret", () => {
  it("should match guess chars wiht secret in upper case", () => {
    expect(evaluateSecret('absed', 'ABSED')).toEqual({bulls: 5, cows: 5});
  });

  it("should correct count bulls and cows", () => {
    expect(evaluateSecret('absed', '12304')).toEqual({bulls: 0, cows: 0});
    expect(evaluateSecret('absed', 'absed')).toEqual({bulls: 5, cows: 5});
    expect(evaluateSecret('absed', '1b3ad')).toEqual({bulls: 2, cows: 3});
    expect(evaluateSecret('absed', 'desba')).toEqual({bulls: 1, cows: 5});
  });
});