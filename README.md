# friendly-numbers

JS library to manage and format numbers with Thousand (k), Million (M), etc. syntax and also to format small decimal numbers.

## Introduction

Zero dependency library to fromat numbers with short format. For example `15430 => 15K` or `15430 => 15.4K`.

Another config proerty will help to manage decimals for very small numbers, where you can select how many decimals numbers you want to show after all 0s. For example `0.0000345466 => 0.000034`.

## Installation

with npm

```
$ npm install friendly-numbers
```

with yarn

```
$ yarn add friendly-numbers
```

## Usage

### `format`

This function will shrink the received number if it is bigger than 999 and it will returned a string with the TBMK corresponding notation.

```
import { format } from 'friendly-numbers';

...

const totalBalance = 5000;
const formattedBalance = format(totalBalance);
// result stored in formattedBalance will be '5K'

...

```

|         Units         |                Range                |    Example    | Output |
| :-------------------: | :---------------------------------: | :-----------: | :----: |
| Units, Tens, Hundreds |              (0 - 999)              |      500      |  500   |
|       Thousands       |           (1000 - 999999)           |     5000      |   5K   |
|       Millions        |        (1000000 - 999999999)        |    5000000    |   5M   |
|       Billions        |    (1000000000 - 99999999999999)    |  5000000000   |   5B   |
|       Trillions       | (1000000000000 - 99999999999999999) | 5000000000000 |   5T   |

#### Optional Config

There is an optional config parameter that can be passed to `format` function

```
const config = {
  // Define decimal numbers to display in the decimal part, if decimals present
  decimals: 2,
  // Number of decimals to display (if required) for formatted numbers
  // e.g. 0 decimals: 4123 => 4K | 1 decimal: 4123 => 4.1K | 2 decimals: 4123 => 4.12K | ...
  formattedDecimals: 2,
  // Override previous rule in case of 0.00XXX in case of more than X amounts of 0
  // in order to display something more meaningful than a simple 0
  smallMinimumMeaningfulDigits: 2
};

...

const formattedNumber = format(number, config);
```

| Parameter                    | Default Value | Description                                                                                                                                                                                                                                                                                | Example                                                                                                                                                                                                                                                                                             |
| ---------------------------- | :-----------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| decimals                     |       2       | Decimal numbers to display in the decimal part, if required. In case of extra decimals beyond the defined number, the number will be truncated and rounded.                                                                                                                                | _ number: 0.123456<br/> _ decimals: 2 => 0.12<br/> _ decimals: 4 => 0.1234<br/><br/>_ number: 5.2000<br/> _ decimals: 2 => 5.20<br/> _ decimals: 4 => 5.2000<br/><br/>_ number: 7.0000<br/> _ decimals: 2 => 7<br/> \* decimals: 4 => 7                                                             |
| formattedDecimals            |       0       | If this property is set (> 0) it will add N decimals to numbers formatted with notation TBMK, if required. In case of extra numbers beyond the defined number, the number will be truncated and rounded.                                                                                   | _ number: 4123<br/> _ formattedDecimals: 0 => 4K<br/> _ formattedDecimals: 1 => 4.1K<br/> _ formattedDecimals: 2 => 4.12K<br/><br/>_ number: 2876<br/> _ formattedDecimals: 0 => 3K<br/> _ formattedDecimals: 1 => 2.9K<br/> _ formattedDecimals: 2 => 2.88K                                        |
| smallMinimumMeaningfulDigits |       0       | If this property is set (> 0), in case of numbers of 0.00..0XXXX it will display as many decimals required until the first non-zero decimal and from this point until N number defined. In the case of extra decimals beyond the defined number, the number will be truncated and rounded. | _ number: 0.001234<br/> _ smallMinimumMeaningfulDigits: 0 => 0.00<br/> _ smallMinimumMeaningfulDigits: 1 => 0.001<br/><br/>_ number: 0.001876<br/> _ smallMinimumMeaningfulDigits: 0 => 0.00<br/> _ smallMinimumMeaningfulDigits: 1 => 0.002<br/> \* smallMinimumMeaningfulDigits: 2 => 0.0019<br/> |

### `deFormat`

This function will parse formatted numbers with `format` function in the notation of TBMK into full numbers.<br/>
**Note** Please bear in mind that the usage of this function it is not recommended as it can produce a loss of precission. The recommended approach is to keep in the code the full number and only formatted during the render process.

```
import { deFormat } from 'friendly-numbers';

...

const formattedBalance = "5K";
const balance = deFormat(formattedBalance);
// result stored in balance will be 5000

...

```

Precission loss example:

```
import { format, deFormat } from 'friendly-numbers';

...
const originalBalance = 5555;
const formattedBalance = format(originalBalance);
const balance = deFormat(formattedBalance);
// result stored in formattedBalance will be "5k"
// result stored in balance will be 5000

...

```

## Contributions

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

The MIT License (MIT)

Copyright (c) 2019 Alvaro Jimenez Martin

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
