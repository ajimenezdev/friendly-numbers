const letters = "KMBT";
const round = (n, precision) => {
  const prec = Math.pow(10, precision);
  return Math.round(n * prec) / prec;
};

const defaultConfig = {
  // Define decimal numbers to display in the decimal part, if decimals present
  decimals: 2,
  // Number of decimals to display (if required) for formatted numbers
  // e.g. 0 decimals: 4123 => 4K | 1 decimal: 4123 => 4.1K | 2 decimals: 4123 => 4.12K | ...
  formattedDecimals: null,
  // Override previous rule in case of 0.00XXX in case of more than X amounts of 0
  // in order to display something more meaningful than a simple 0
  smallMinimumMeaningfulDigits: null
};

const roundDecimals = (
  number,
  { decimals, smallMinimumMeaningfulDigits } = defaultConfig
) => {
  const floatNumber = parseFloat(number);
  // if it has decimals
  if (floatNumber % 1 !== 0) {
    // And it is not 0 on the whole number part
    if (floatNumber >= 1 || floatNumber <= -1 || !smallMinimumMeaningfulDigits)
      return floatNumber.toFixed(decimals);
    // If it is smaller than 1 round to first to decimals after last 0
    let fixedNumber =
      smallMinimumMeaningfulDigits -
      1 -
      Math.floor(Math.log(floatNumber) / Math.log(10));
    if (fixedNumber < 0) fixedNumber = 0;
    if (fixedNumber > 20) fixedNumber = 20;
    return floatNumber.toFixed(fixedNumber);
  }
  return floatNumber;
};

const format = (n, config = defaultConfig) => {
  const base = Math.min(
    Math.floor(Math.log(Math.abs(n)) / Math.log(1000)),
    letters.length
  );
  const suffix = letters[base - 1];
  if (suffix) {
    const roundedNumber = round(n / Math.pow(1000, base), 2); // eslint-disable-line no-restricted-properties
    return (
      roundDecimals(roundedNumber, { ...defaultConfig, ...config }) + suffix
    );
  }
  return `${roundDecimals(n, { ...defaultConfig, ...config })}`;
};

const deFormat = s => {
  const base = letters.indexOf(s[s.length - 1]);
  if (base === -1) {
    return parseFloat(s);
  }
  const multiplier = Math.pow(1000, base + 1); // eslint-disable-line no-restricted-properties
  return parseFloat(s.slice(0, -1)) * multiplier;
};

module.exports = {
  format,
  deFormat
};
