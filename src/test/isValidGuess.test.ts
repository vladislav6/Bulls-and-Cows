import { describe, expect, it } from 'vitest';
import { isValidGuess } from '../core/isValidGuess';

describe('isValidGuess', () => {
  it('should validate length', () => {
    expect(isValidGuess('abced', 6, 16)).toBeFalsy();
  });

  it('should validate repeated digits', () => {
    expect(isValidGuess('abbed', 5, 16)).toBeFalsy();
  });

  it('should validate digits by base', () => {
    expect(isValidGuess('01', 2, 2)).toBeTruthy();
    expect(isValidGuess('7314', 4, 8)).toBeTruthy();
    expect(isValidGuess('987', 3, 10)).toBeTruthy();
    expect(isValidGuess('9ace80', 6, 16)).toBeTruthy();
  });
});
