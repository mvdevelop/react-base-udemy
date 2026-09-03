import { validateEmail, validateRequired, validateMinLength } from './validators';

describe('Validators', () => {
  describe('validateEmail', () => {
    it('should return true for valid email', () => {
      expect(validateEmail('test@example.com')).toBe(true);
    });

    it('should return false for invalid email', () => {
      expect(validateEmail('invalid-email')).toBe(false);
      expect(validateEmail('')).toBe(false);
      expect(validateEmail('@example.com')).toBe(false);
    });
  });

  describe('validateRequired', () => {
    it('should return true for non-empty value', () => {
      expect(validateRequired('hello')).toBe(true);
    });

    it('should return false for empty value', () => {
      expect(validateRequired('')).toBe(false);
      expect(validateRequired(null)).toBe(false);
      expect(validateRequired(undefined)).toBe(false);
    });
  });

  describe('validateMinLength', () => {
    it('should return true if value length >= min', () => {
      expect(validateMinLength('hello', 3)).toBe(true);
    });

    it('should return false if value length < min', () => {
      expect(validateMinLength('hi', 5)).toBe(false);
    });
  });
});