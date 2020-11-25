import toCapitalizeFirstLetter from './capitalize';

describe('capitalize', () => {
  test('should return the same', () => {
    expect(toCapitalizeFirstLetter('Senior')).toBe('Senior');
  });

  test('should capitalize only first letter', () => {
    expect(toCapitalizeFirstLetter('senior')).toBe('Senior');
  });

  test('should lowercase all except first', () => {
    expect(toCapitalizeFirstLetter('SENIOR')).toBe('Senior');
  });
});
