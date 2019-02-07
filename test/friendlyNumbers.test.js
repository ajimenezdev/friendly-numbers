const { format, deFormat } = require("../src");

describe("functions should be imported", () => {
  it('"format" function should be imported', () => {
    expect(format).not.toBeNull();
  });
  it('"deFormat" function should be imported', () => {
    expect(deFormat).not.toBeNull();
  });
});

describe("Test FriendlyNumber format function with input numbers without decimals", () => {
  it("should not reformat numbers between -999 and 999", () => {
    const number0 = "0";
    const formattedNumber0 = format(number0);
    expect(formattedNumber0).toBe(number0);

    const number999 = "999";
    const formattedNumber999 = format(number999);
    expect(formattedNumber999).toBe(number999);

    const numberNeg1 = "-1";
    const formattedNumberNeg1 = format(numberNeg1);
    expect(formattedNumberNeg1).toBe(numberNeg1);

    const numberNeg999 = "-999";
    const formattedNumberNeg999 = format(numberNeg999);
    expect(formattedNumberNeg999).toBe(numberNeg999);
  });

  it("should format with K numbers between 1.000 <=> 999.999 and -1.000 <=> -999.999", () => {
    const formattedNumber1K = format(1000);
    expect(formattedNumber1K).toBe("1K");

    const formattedNumberNeg1K = format(-1000);
    expect(formattedNumberNeg1K).toBe("-1K");

    const formattedNumber999K = format(999999);
    expect(formattedNumber999K).toBe("1000K");

    const formattedNumberNeg999K = format(-999999);
    expect(formattedNumberNeg999K).toBe("-1000K");
  });

  it("should format with M numbers between 1.000.000 <=> 999.999.999 and -1.000.000 <=> -999.999.999", () => {
    const formattedNumber1M = format(1000000);
    expect(formattedNumber1M).toBe("1M");

    const formattedNumberNeg1M = format(-1000000);
    expect(formattedNumberNeg1M).toBe("-1M");

    const formattedNumber999M = format(999999999);
    expect(formattedNumber999M).toBe("1000M");

    const formattedNumberNeg999M = format(-999999999);
    expect(formattedNumberNeg999M).toBe("-1000M");
  });

  it("should format with B numbers between 1.000.000.000 <=> 999.999.999.999 and -1.000.000.000 <=> -999.999.999.999", () => {
    const formattedNumber1B = format(1000000000);
    expect(formattedNumber1B).toBe("1B");

    const formattedNumber1B2 = format(1234000000);
    expect(formattedNumber1B2).toBe("1B");

    const formattedNumberNeg1B = format(-1000000000);
    expect(formattedNumberNeg1B).toBe("-1B");

    const formattedNumber999B = format(999999999999);
    expect(formattedNumber999B).toBe("1000B");

    const formattedNumberNeg999B = format(-999999999999);
    expect(formattedNumberNeg999B).toBe("-1000B");
  });

  it("should format with B numbers between 1.000.000.000.000 <=> 999.999.999.999.999 and -1.000.000.000.000 <=> -999.999.999.999.999", () => {
    const formattedNumber1T = format(1000000000000);
    expect(formattedNumber1T).toBe("1T");

    const formattedNumberNeg1T = format(-1000000000000);
    expect(formattedNumberNeg1T).toBe("-1T");

    const formattedNumber999T = format(999999999999999);
    expect(formattedNumber999T).toBe("1000T");

    const formattedNumberNeg999T = format(-999999999999999);
    expect(formattedNumberNeg999T).toBe("-1000T");
  });
});

describe("Test FriendlyNumber format function with formattedDecimals config", () => {
  it("should not reformat numbers between -999 and 999", () => {
    const config = {
      formattedDecimals: 1
    };
    const number0 = "0";
    const formattedNumber0 = format(number0, config);
    expect(formattedNumber0).toBe(number0);

    const number999 = "999";
    const formattedNumber999 = format(number999, config);
    expect(formattedNumber999).toBe(number999);

    const numberNeg1 = "-1";
    const formattedNumberNeg1 = format(numberNeg1, config);
    expect(formattedNumberNeg1).toBe(numberNeg1);

    const numberNeg999 = "-999";
    const formattedNumberNeg999 = format(numberNeg999, config);
    expect(formattedNumberNeg999).toBe(numberNeg999);
  });

  it("should format with K numbers between 1.000 <=> 999.999 and -1.000 <=> -999.999", () => {
    const config = {
      formattedDecimals: 1
    };
    const formattedNumber1234K = format(1234, config);
    expect(formattedNumber1234K).toBe("1.2K");

    const formattedNumberNeg1234K = format(-1234, config);
    expect(formattedNumberNeg1234K).toBe("-1.2K");

    const formattedNumber1876K = format(1876, config);
    expect(formattedNumber1876K).toBe("1.9K");

    const formattedNumberNeg1876K = format(-1876, config);
    expect(formattedNumberNeg1876K).toBe("-1.9K");

    const formattedNumber999K = format(999999, config);
    expect(formattedNumber999K).toBe("1000K");
  });

  it("should format with M numbers between 1.000.000 <=> 999.999.999 and -1.000.000 <=> -999.999.999", () => {
    const config = {
      formattedDecimals: 2
    };
    const formattedNumber1234M = format(1234000, config);
    expect(formattedNumber1234M).toBe("1.23M");

    const formattedNumberNeg1234M = format(-1234000, config);
    expect(formattedNumberNeg1234M).toBe("-1.23M");

    const formattedNumber1876M = format(1876000, config);
    expect(formattedNumber1876M).toBe("1.88M");

    const formattedNumberNeg1876M = format(-1876000, config);
    expect(formattedNumberNeg1876M).toBe("-1.88M");

    const formattedNumber999M = format(999999999, config);
    expect(formattedNumber999M).toBe("1000M");
  });

  it("should format with B numbers between 1.000.000.000 <=> 999.999.999.999 and -1.000.000.000 <=> -999.999.999.999", () => {
    const config = {
      formattedDecimals: 3
    };
    const formattedNumber1234B = format(1234000000, config);
    expect(formattedNumber1234B).toBe("1.234B");

    const formattedNumberNeg1234B = format(-1234000000, config);
    expect(formattedNumberNeg1234B).toBe("-1.234B");

    const formattedNumber1876B = format(1876500000, config);
    expect(formattedNumber1876B).toBe("1.877B");

    const formattedNumberNeg1876B = format(-1876500000, config);
    expect(formattedNumberNeg1876B).toBe("-1.877B");

    const formattedNumber999B = format(999999999999, config);
    expect(formattedNumber999B).toBe("1000B");
  });

  it("should format with B numbers between 1.000.000.000.000 <=> 999.999.999.999.999 and -1.000.000.000.000 <=> -999.999.999.999.999", () => {
    const config = {
      formattedDecimals: 4
    };
    const formattedNumber1234T = format(1234500000000, config);
    expect(formattedNumber1234T).toBe("1.2345T");

    const formattedNumberNeg1234T = format(-1234500000000, config);
    expect(formattedNumberNeg1234T).toBe("-1.2345T");

    const formattedNumber1876T = format(1876550000000, config);
    expect(formattedNumber1876T).toBe("1.8766T");

    const formattedNumberNeg1876T = format(-1876550000000, config);
    expect(formattedNumberNeg1876T).toBe("-1.8766T");

    const formattedNumber999T = format(999999999999999, config);
    expect(formattedNumber999T).toBe("1000T");
  });
});

describe("Test FriendlyNumber format function with input numbers with decimals", () => {
  it("should not reformat numbers with only two decimals and", () => {
    const config = {
      decimals: 2,
      formattedDecimals: 2
    };

    const number999_99 = "999.99";
    const formattedNumber999_999 = format(number999_99, config);
    expect(formattedNumber999_999).toBe(number999_99);

    const numberNeg999_99 = "-999.99";
    const formattedNumberneg999_999 = format(numberNeg999_99, config);
    expect(formattedNumberneg999_999).toBe(numberNeg999_99);

    const number0_01 = "0.01";
    const formattedNumber0_01 = format(number0_01, config);
    expect(formattedNumber0_01).toBe(number0_01);

    const number0_99 = "0.99";
    const formattedNumber0_99 = format(number0_99, config);
    expect(formattedNumber0_99).toBe(number0_99);
  });

  it("should truncate and round numbers with more than 2 decimasl (default config)", () => {
    const config = {
      decimals: 2,
      formattedDecimals: 2
    };

    const number999_999 = "999.999";
    const formattedNumber999_999 = format(number999_999, config);
    expect(formattedNumber999_999).toBe("1000");

    const numberNeg999_999 = "-999.999";
    const formattedNumberneg999_999 = format(numberNeg999_999, config);
    expect(formattedNumberneg999_999).toBe("-1000");

    const number0_011 = "0.011";
    const formattedNumber0_011 = format(number0_011, config);
    expect(formattedNumber0_011).toBe("0.01");

    const number0_019 = "0.019";
    const formattedNumber0_019 = format(number0_019, config);
    expect(formattedNumber0_019).toBe("0.02");

    const number0_991 = "0.991";
    const formattedNumber0_991 = format(number0_991, config);
    expect(formattedNumber0_991).toBe("0.99");

    const number0_996 = "0.996";
    const formattedNumber0_996 = format(number0_996, config);
    expect(formattedNumber0_996).toBe("1");
  });
});

describe("Test FriendlyNumber format function with input numbers with decimals and config set to >2", () => {
  it("should not reformat numbers with only 4 decimals and", () => {
    const config = {
      decimals: 4,
      formattedDecimals: 4
    };
    const number999_9999 = "999.9999";
    const formattedNumber999_9999 = format(number999_9999, config);
    expect(formattedNumber999_9999).toBe(number999_9999);

    const numberNeg999_9999 = "-999.9999";
    const formattedNumberneg999_9999 = format(numberNeg999_9999, config);
    expect(formattedNumberneg999_9999).toBe(numberNeg999_9999);

    const number0_0001 = "0.0001";
    const formattedNumber0_0001 = format(number0_0001, config);
    expect(formattedNumber0_0001).toBe(number0_0001);

    const number0_9999 = "0.9999";
    const formattedNumber0_9999 = format(number0_9999, config);
    expect(formattedNumber0_9999).toBe(number0_9999);
  });

  it("should truncate and round numbers with more than 5 decimals (default config)", () => {
    const config = {
      decimals: 5,
      formattedDecimals: 5
    };
    const number999_999999 = "999.999999";
    const formattedNumber999_999999 = format(number999_999999, config);
    expect(formattedNumber999_999999).toBe("1000");

    const numberNeg999_999999 = "-999.999999";
    const formattedNumberneg999_999999 = format(numberNeg999_999999, config);
    expect(formattedNumberneg999_999999).toBe("-1000");

    const number0_000011 = "0.000011";
    const formattedNumber0_000011 = format(number0_000011, config);
    expect(formattedNumber0_000011).toBe("0.00001");

    const number0_011119 = "0.011119";
    const formattedNumber0_011119 = format(number0_011119, config);
    expect(formattedNumber0_011119).toBe("0.01112");

    const number0_999991 = "0.999991";
    const formattedNumber0_999991 = format(number0_999991, config);
    expect(formattedNumber0_999991).toBe("0.99999");

    const number0_999996 = "0.999996";
    const formattedNumber0_999996 = format(number0_999996, config);
    expect(formattedNumber0_999996).toBe("1");
  });
});

describe("Test FriendlyNumber format function with input numbers with decimals and config set to smallMinimumMeaningfulDigits = 2", () => {
  it("should not reformat numbers with meaningfuldecimals (!0) since first decimal point", () => {
    const config = {
      smallMinimumMeaningfulDigits: 2
    };
    const number999_99 = "999.99";
    const formattedNumber999_99 = format(number999_99, config);
    expect(formattedNumber999_99).toBe(number999_99);

    const numberNeg999_99 = "-999.99";
    const formattedNumberneg999_99 = format(numberNeg999_99, config);
    expect(formattedNumberneg999_99).toBe(numberNeg999_99);

    const number0_11 = "0.11";
    const formattedNumber0_11 = format(number0_11, config);
    expect(formattedNumber0_11).toBe(number0_11);

    const number0_99 = "0.99";
    const formattedNumber0_99 = format(number0_99, config);
    expect(formattedNumber0_99).toBe(number0_99);
  });

  it("should truncate and round numbers with first two non-cero decimal when number is 0.XXX", () => {
    const config = {
      smallMinimumMeaningfulDigits: 2
    };
    const number0_00099123 = "0.00099123";
    const formattedNumber0_00099123 = format(number0_00099123, config);
    expect(formattedNumber0_00099123).toBe("0.00099");

    const number0_0000000123 = "0.00000123";
    const formattedNumber0_0000000123 = format(number0_0000000123, config);
    expect(formattedNumber0_0000000123).toBe("0.0000012");

    const number0_00000127 = "0.00000127";
    const formattedNumber0_00000127 = format(number0_00000127, config);
    expect(formattedNumber0_00000127).toBe("0.0000013");

    const number0_000001217 = "0.000001217";
    const formattedNumber0_000001217 = format(number0_000001217, config);
    expect(formattedNumber0_000001217).toBe("0.0000012");

    const number0_00001257 = "0.00001257";
    const formattedNumber0_00001257 = format(number0_00001257, config);
    expect(formattedNumber0_00001257).toBe("0.000013");

    const number0_00005557 = "0.00005557";
    const formattedNumber0_00005557 = format(number0_00005557, config);
    expect(formattedNumber0_00005557).toBe("0.000056");

    const number0_0000999 = "0.0000999";
    const formattedNumber0_0000999 = format(number0_0000999, config);
    expect(formattedNumber0_0000999).toBe("0.0001");
  });
});

describe("Test FriendlyNumber deFormat function with input numbers without decimals", () => {
  it("should return same input for numbers between -999 and 999", () => {
    const number0 = "0";
    const deformattedNumber0 = deFormat(number0);
    expect(deformattedNumber0).toBe(parseInt(number0));

    const number999 = "999";
    const deFromatedNumber999 = deFormat(number999);
    expect(deFromatedNumber999).toBe(parseInt(number999));

    const numberNeg1 = "-1";
    const deFromatedNumberNeg1 = deFormat(numberNeg1);
    expect(deFromatedNumberNeg1).toBe(parseInt(numberNeg1));

    const numberNeg999 = "-999";
    const deFromatedNumberNeg999 = deFormat(numberNeg999);
    expect(deFromatedNumberNeg999).toBe(parseInt(numberNeg999));
  });

  it("should deFormat with K numbers between 1k <=> 999k and -1k <=> -999k", () => {
    const deFromatedNumber1K = deFormat("1K");
    expect(deFromatedNumber1K).toBe(1000);

    const deFromatedNumberNeg1K = deFormat("-1K");
    expect(deFromatedNumberNeg1K).toBe(-1000);

    const deFromatedNumber999K = deFormat("999K");
    expect(deFromatedNumber999K).toBe(999000);

    const deFromatedNumberNeg999K = deFormat("-999K");
    expect(deFromatedNumberNeg999K).toBe(-999000);
  });

  it("should deFormat with M numbers between 1M <=> 999M and -1M <=> -999M", () => {
    const deFromatedNumber1M = deFormat("1M");
    expect(deFromatedNumber1M).toBe(1000000);

    const deFromatedNumberNeg1M = deFormat("-1M");
    expect(deFromatedNumberNeg1M).toBe(-1000000);

    const deFromatedNumber999M = deFormat("999M");
    expect(deFromatedNumber999M).toBe(999000000);

    const deFromatedNumberNeg999M = deFormat("-999M");
    expect(deFromatedNumberNeg999M).toBe(-999000000);
  });

  it("should deFormat with B numbers between 1B <=> 999B and -1B <=> -999B", () => {
    const deFromatedNumber1B = deFormat("1B");
    expect(deFromatedNumber1B).toBe(1000000000);

    const deFromatedNumber1B2 = deFormat("999B");
    expect(deFromatedNumber1B2).toBe(999000000000);

    const deFromatedNumberNeg1B = deFormat("-1B");
    expect(deFromatedNumberNeg1B).toBe(-1000000000);

    const deFromatedNumberNeg999B = deFormat("-999B");
    expect(deFromatedNumberNeg999B).toBe(-999000000000);
  });

  it("should deFormat with T numbers bigger than 1T+ and smaller than -1T", () => {
    const deFromatedNumber1T = deFormat("1T");
    expect(deFromatedNumber1T).toBe(1000000000000);

    const deFromatedNumberNeg1T = deFormat("-1T");
    expect(deFromatedNumberNeg1T).toBe(-1000000000000);

    const deFromatedNumber999T = deFormat("999T");
    expect(deFromatedNumber999T).toBe(999000000000000);

    const deFromatedNumberNeg999T = deFormat("-999T");
    expect(deFromatedNumberNeg999T).toBe(-999000000000000);

    const deFromatedNumber9999T = deFormat("9999T");
    expect(deFromatedNumber9999T).toBe(9999000000000000);

    const deFromatedNumberNeg9999T = deFormat("-9999T");
    expect(deFromatedNumberNeg9999T).toBe(-9999000000000000);
  });
});
