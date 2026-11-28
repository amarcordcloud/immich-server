import { ByteUnit, getByteUnitString, getBytesWithUnit } from '#lib/utils/byte-units.ts';

describe('getBytesWithUnit', () => {
  const tests = [
    { bytes: 0, expected: [0, ByteUnit.B] },
    { bytes: 42 * 1e6, expected: [42, ByteUnit.MB] },
    { bytes: 279 * 1e6, expected: [279, ByteUnit.MB] },
    { bytes: 42 + 1337, maxPrecision: 3, expected: [1.347, ByteUnit.kB] },
    { bytes: 42 + 69, expected: [111, ByteUnit.B] },
    { bytes: 1e9 - 1, expected: [1000, ByteUnit.MB] },
    { bytes: 1e9, expected: [1, ByteUnit.GB] },
    { bytes: 1e9 + 1, expected: [1, ByteUnit.GB] },
  ];
  for (const { bytes, maxPrecision, expected } of tests) {
    it(`${bytes} should be split up in the factor ${expected[0]} and unit ${expected[1]}`, () => {
      expect(getBytesWithUnit(bytes, maxPrecision)).toEqual(expected);
    });
  }
});

describe('asByteUnitString', () => {
  it('should correctly return string', () => {
    expect(getByteUnitString(42 * 1e6)).toEqual('42 MB');
  });
});
