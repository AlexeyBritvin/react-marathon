const toCapitalizeFirstLetter = (word: string): string => {
  if (!word.length) {
    return '';
  }
  const letters = word.toLowerCase().split('');
  const [first, ...rest] = letters;
  return [first.toUpperCase(), ...rest].join('');
};

export default toCapitalizeFirstLetter;
