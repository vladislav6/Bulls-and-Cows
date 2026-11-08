import { describe, expect, it } from 'vitest';
import { countPossibleSecrets } from '../core/countPossibleSecrets';

describe("countPossibleSecrets", () => {
  it('should return 0 for invalid arguments', () => {
    expect(countPossibleSecrets(-1, 5)).toBe(0);
    expect(countPossibleSecrets(5, -1)).toBe(0);
    expect(countPossibleSecrets(6, 5)).toBe(0);
  });
});