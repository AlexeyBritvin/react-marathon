const toCapitalizeFirstLetter = (word: string): string => {
  const letters = word.split('');
  const [first, ...rest] = letters;
  return [first.toUpperCase(), ...rest.map((letter) => letter.toLowerCase())].join('');
};

export default toCapitalizeFirstLetter;
