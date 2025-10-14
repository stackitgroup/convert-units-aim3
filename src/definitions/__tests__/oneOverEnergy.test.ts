import configureMeasurements from '../..';
import oneOverEnergy, {
  OneOverEnergySystems,
  OneOverEnergyUnits,
} from '../oneOverEnergy';

describe('OneOverEnergy conversions', () => {
  const convert = configureMeasurements<
    'oneOverEnergy',
    OneOverEnergySystems,
    OneOverEnergyUnits
  >({
    oneOverEnergy,
  });

  describe('metric -> to anchor', () => {
    test('5 1/m3 to 1/kWh', () => {
      const result = convert(5).from('1/m3').to('1/kWh');
      expect(result).toBeCloseTo(0.48308802);
    });

    test('48 1/m3 to 1/kWh', () => {
      const result = convert(48).from('1/m3').to('1/kWh');
      expect(result).toBeCloseTo(4.637644992);
    });

    test('7 1/kWh to 1/m3', () => {
      const result = convert(7).from('1/kWh').to('1/m3');
      expect(result).toBeCloseTo(72.44976516);
    });

    test('23 1/kWh to 1/m3', () => {
      const result = convert(23).from('1/kWh').to('1/m3');
      expect(result).toBeCloseTo(238.0492284);
    });

    test('5 1/GJ to 1/kWh', () => {
      const result = convert(5).from('1/GJ').to('1/kWh');
      expect(result).toBeCloseTo(0.018000006);
    });

    test('48 1/GJ to 1/kWh', () => {
      const result = convert(48).from('1/GJ').to('1/kWh');
      expect(result).toBeCloseTo(0.1728000576);
    });

    test('7 1/kWh to 1/GJ', () => {
      const result = convert(7).from('1/kWh').to('1/GJ');
      expect(result).toBeCloseTo(1944.4437);
    });

    test('23 1/kWh to 1/GJ', () => {
      const result = convert(23).from('1/kWh').to('1/GJ');
      expect(result).toBeCloseTo(6388.8867);
    });

    test('5 1/tonne to 1/kWh', () => {
      const result = convert(5).from('1/tonne').to('1/kWh');
      expect(result).toBeCloseTo(0.0077382);
    });

    test('48 1/tonne to 1/kWh', () => {
      const result = convert(48).from('1/tonne').to('1/kWh');
      expect(result).toBeCloseTo(0.0742871);
    });

    test('7 1/kWh to 1/tonne', () => {
      const result = convert(7).from('1/kWh').to('1/tonne');
      expect(result).toBeCloseTo(4522.989152);
    });

    test('23 1/kWh to 1/tonne', () => {
      const result = convert(23).from('1/kWh').to('1/tonne');
      expect(result).toBeCloseTo(14861.25);
    });
  });

  describe('metric: intra-system conversions', () => {
    test('25 1/m3 to 1/GJ', () => {
      const result = convert(25).from('1/m3').to('1/GJ');

      const expected = (25 * 2.8317) / 0.10551; // 670.95
      expect(result).toBeCloseTo(expected, 4);
    });

    test('25 1/m3 to 1/tonne', () => {
      const result = convert(25).from('1/m3').to('1/tonne');

      const expected = (25 * 2.8317) / 0.1 / 0.45359; // 1560.715624
      expect(result).toBeCloseTo(expected, 4);
    });

    test('25 1/tonne to 1/m3 conversion', () => {
      const result = convert(25).from('1/tonne').to('1/m3');

      const expected = (25 * 0.45359 * 0.1) / 2.8317; // 0.40045
      expect(result).toBeCloseTo(expected, 4);
    });

    test('25 1/GJ to 1/tonne conversion', () => {
      const result = convert(25).from('1/GJ').to('1/tonne');

      const expected = (25 * 0.10551) / 0.1 / 0.45359; // 58.1527
      expect(result).toBeCloseTo(expected, 4);
    });
  });

  describe('imperial -> to anchor', () => {
    test('5 1/ton-hr to 1/MMBtu', () => {
      const result = convert(5).from('1/ton-hr').to('1/MMBtu');
      expect(result).toBeCloseTo(416.657182);
    });

    test('48 1/ton-hr to 1/MMBtu', () => {
      const result = convert(48).from('1/ton-hr').to('1/MMBtu');
      expect(result).toBeCloseTo(3999.908947);
    });

    test('7 1/MMBtu to 1/ton-hr', () => {
      const result = convert(7).from('1/MMBtu').to('1/ton-hr');
      expect(result).toBeCloseTo(0.084000028);
    });

    test('23 1/MMBtu to 1/ton-hr', () => {
      const result = convert(23).from('1/MMBtu').to('1/ton-hr');
      expect(result).toBeCloseTo(0.276000092);
    });

    test('5 1/therm to 1/MMBtu', () => {
      const result = convert(5).from('1/therm').to('1/MMBtu');
      expect(result).toBeCloseTo(50);
    });

    test('48 1/therm to 1/MMBtu', () => {
      const result = convert(48).from('1/therm').to('1/MMBtu');
      expect(result).toBeCloseTo(480);
    });

    test('7 1/MMBtu to 1/therm', () => {
      const result = convert(7).from('1/MMBtu').to('1/therm');
      expect(result).toBeCloseTo(0.7);
    });

    test('23 1/MMBtu to 1/therm', () => {
      const result = convert(23).from('1/MMBtu').to('1/therm');
      expect(result).toBeCloseTo(2.3);
    });

    test('5 1/ccf to 1/MMBtu', () => {
      const result = convert(5).from('1/ccf').to('1/MMBtu');
      expect(result).toBeCloseTo(50);
    });

    test('48 1/ccf to 1/MMBtu', () => {
      const result = convert(48).from('1/ccf').to('1/MMBtu');
      expect(result).toBeCloseTo(480);
    });

    test('7 1/MMBtu to 1/ccf', () => {
      const result = convert(7).from('1/MMBtu').to('1/ccf');
      expect(result).toBeCloseTo(0.7);
    });

    test('23 1/MMBtu to 1/ccf', () => {
      const result = convert(23).from('1/MMBtu').to('1/ccf');
      expect(result).toBeCloseTo(2.3);
    });

    test('5 1/klb to 1/MMBtu', () => {
      const result = convert(5).from('1/klb').to('1/MMBtu');
      expect(result).toBeCloseTo(5);
    });

    test('48 1/klb to 1/MMBtu', () => {
      const result = convert(48).from('1/klb').to('1/MMBtu');
      expect(result).toBeCloseTo(48);
    });

    test('7 1/MMBtu to 1/klb', () => {
      const result = convert(7).from('1/MMBtu').to('1/klb');
      expect(result).toBeCloseTo(7);
    });

    test('23 1/MMBtu to 1/klb', () => {
      const result = convert(23).from('1/MMBtu').to('1/klb');
      expect(result).toBeCloseTo(23);
    });
  });

  describe('intra-system conversions', () => {
    test('25 1/ton-hr to 1/therm', () => {
      const result = convert(25).from('1/ton-hr').to('1/therm');
      expect(result).toBeCloseTo(208.328591);
    });

    test('25 1/ton-hr to 1/ccf', () => {
      const result = convert(25).from('1/ton-hr').to('1/ccf');
      expect(result).toBeCloseTo(208.328591);
    });

    test('25 1/ton-hr to 1/klb', () => {
      const result = convert(25).from('1/ton-hr').to('1/klb');
      expect(result).toBeCloseTo(2083.28591);
    });

    test('25 1/therm to 1/ccf', () => {
      const result = convert(25).from('1/therm').to('1/ccf');
      expect(result).toBeCloseTo(25);
    });

    test('25 1/therm to 1/klb', () => {
      const result = convert(25).from('1/therm').to('1/klb');
      expect(result).toBeCloseTo(250);
    });

    test('25 1/ccf to 1/klb', () => {
      const result = convert(25).from('1/ccf').to('1/klb');
      expect(result).toBeCloseTo(250);
    });

    test('11 1/MMBtu to 1/kWh', () => {
      const result = convert(11).from('1/MMBtu').to('1/kWh');
      expect(result).toBeCloseTo(0.037532);
    });

    test('11 1/kWh to 1/MMBtu', () => {
      const result = convert(11).from('1/kWh').to('1/MMBtu');
      expect(result).toBeCloseTo(3223.88);
    });

    test('11 1/MMBtu to 1/GJ', () => {
      const result = convert(11).from('1/MMBtu').to('1/GJ');
      expect(result).toBeCloseTo(10.42555208);
    });

    test('20 1/GJ to 1/therm', () => {
      const result = convert(20).from('1/GJ').to('1/therm');

      expect(result).toBeCloseTo(2.1102);
    });

    test('11 1/tonne to 1/ccf', () => {
      const result = convert(11).from('1/tonne').to('1/ccf');
      expect(result).toBeCloseTo(0.498949);
    });
  });

  // Identity conversions - same unit to same unit should preserve exact value
  describe('Identity conversions', () => {
    test('1/kWh to 1/kWh', () => {
      const result = convert(42.5).from('1/kWh').to('1/kWh');
      expect(result).toBe(42.5);
    });

    test('1/m3 to 1/m3', () => {
      const result = convert(123.456).from('1/m3').to('1/m3');
      expect(result).toBe(123.456);
    });

    test('1/GJ to 1/GJ', () => {
      const result = convert(7.89).from('1/GJ').to('1/GJ');
      expect(result).toBe(7.89);
    });

    test('1/tonne to 1/tonne', () => {
      const result = convert(0.001).from('1/tonne').to('1/tonne');
      expect(result).toBe(0.001);
    });

    test('1/MMBtu to 1/MMBtu', () => {
      const result = convert(99.99).from('1/MMBtu').to('1/MMBtu');
      expect(result).toBe(99.99);
    });

    test('1/ton-hr to 1/ton-hr', () => {
      const result = convert(1000).from('1/ton-hr').to('1/ton-hr');
      expect(result).toBe(1000);
    });

    test('1/therm to 1/therm', () => {
      const result = convert(50.25).from('1/therm').to('1/therm');
      expect(result).toBe(50.25);
    });

    test('1/ccf to 1/ccf', () => {
      const result = convert(0.5).from('1/ccf').to('1/ccf');
      expect(result).toBe(0.5);
    });

    test('1/klb to 1/klb', () => {
      const result = convert(12.345).from('1/klb').to('1/klb');
      expect(result).toBe(12.345);
    });
  });
});
