import { describe, expect, it } from 'vitest';
import { countPossibleSecrets } from '../core/countPossibleSecrets';

describe("countPossibleSecrets", () => {
  it('should return 0 for invalid arguments', () => {
    expect(countPossibleSecrets(-1, 5)).toBe(0);
    expect(countPossibleSecrets(5, -1)).toBe(0);
    expect(countPossibleSecrets(6, 5)).toBe(0);
  });

  it('should return 1 when length is 0', () => {
    expect(countPossibleSecrets(0, 10)).toBe(1);
    expect(countPossibleSecrets(0, 2)).toBe(1);
  });

  it('should calculate the number of possible secrets', () => {
    expect(countPossibleSecrets(1, 5)).toBe(5);
    expect(countPossibleSecrets(2, 5)).toBe(20);
    expect(countPossibleSecrets(3, 5)).toBe(60);
    expect(countPossibleSecrets(4, 10)).toBe(5040);
  });
});