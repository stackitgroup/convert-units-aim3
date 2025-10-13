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

  // test('1/kWh to 1/ton-hr conversion', () => {
  //   const result = convert(1).from('1/kWh').to('1/ton-hr');
  //   expect(result).toBeCloseTo(0.28433, 4);
  // });

  // test('1/kWh to 1/MMBtu conversion', () => {
  //   const result = convert(1).from('1/kWh').to('1/MMBtu');
  //   expect(result).toBeCloseTo(0.003412, 5);
  // });

  // test('1/kWh to 1/therm conversion', () => {
  //   const result = convert(1).from('1/kWh').to('1/therm');
  //   expect(result).toBeCloseTo(0.03412, 4);
  // });

  // test('1/ton-hr to 1/kWh conversion', () => {
  //   const result = convert(1).from('1/ton-hr').to('1/kWh');
  //   expect(result).toBeCloseTo(3.517, 3);
  // });

  // test('1/MMBtu to 1/kWh conversion', () => {
  //   const result = convert(1).from('1/MMBtu').to('1/kWh');
  //   expect(result).toBeCloseTo(293.08, 2);
  // });

  // test('1/therm to 1/kWh conversion', () => {
  //   const result = convert(1).from('1/therm').to('1/kWh');
  //   expect(result).toBeCloseTo(29.308, 3);
  // });

  // test('1/ton-hr to 1/MMBtu conversion', () => {
  //   const result = convert(1).from('1/ton-hr').to('1/MMBtu');
  //   expect(result).toBeCloseTo(0.012, 4);
  // });

  // test('1/MMBtu to 1/ton-hr conversion', () => {
  //   const result = convert(1).from('1/MMBtu').to('1/ton-hr');
  //   expect(result).toBeCloseTo(83.333, 2);
  // });

  // test('1/therm to 1/MMBtu conversion', () => {
  //   const result = convert(1).from('1/therm').to('1/MMBtu');
  //   expect(result).toBeCloseTo(0.1, 3);
  // });

  // test('1/MMBtu to 1/therm conversion', () => {
  //   const result = convert(1).from('1/MMBtu').to('1/therm');
  //   expect(result).toBeCloseTo(10, 1);
  // });

  // test('1/ccf to 1/therm conversion', () => {
  //   const result = convert(1).from('1/ccf').to('1/therm');
  //   expect(result).toBeCloseTo(1, 3);
  // });

  // test('1/therm to 1/ccf conversion', () => {
  //   const result = convert(1).from('1/therm').to('1/ccf');
  //   expect(result).toBeCloseTo(1, 3);
  // });

  // test('1/MMBtu to 1/klb conversion', () => {
  //   const result = convert(1).from('1/MMBtu').to('1/klb');
  //   expect(result).toBeCloseTo(1, 3);
  // });

  // test('1/klb to 1/MMBtu conversion', () => {
  //   const result = convert(1).from('1/klb').to('1/MMBtu');
  //   expect(result).toBeCloseTo(1, 3);
  // });

  // test('1/m3 to 1/kWh conversion', () => {
  //   const result = convert(1).from('1/m3').to('1/kWh');
  //   // 1/therm = 2.8317 * 1/m3 and 1/therm = 29.308 * 1/kWh
  //   // So 1/m3 = (1/2.8317) * 1/therm = (1/2.8317) * 29.308 * 1/kWh
  //   const expected = 29.308 / 2.8317;
  //   expect(result).toBeCloseTo(expected, 2);
  // });

  // test('1/GJ to 1/kWh conversion', () => {
  //   const result = convert(1).from('1/GJ').to('1/kWh');
  //   // 1/MMBtu = 1.0551 * 1/GJ and 1/MMBtu = 293.08 * 1/kWh
  //   // So 1/GJ = (1/1.0551) * 1/MMBtu = (1/1.0551) * 293.08 * 1/kWh
  //   const expected = 293.08 / 1.0551;
  //   expect(result).toBeCloseTo(expected, 1);
  // });

  // test('1/tonne to 1/kWh conversion', () => {
  //   const result = convert(1).from('1/tonne').to('1/kWh');
  //   // 1/MMBtu = 0.45359 * 1/tonne and 1/MMBtu = 293.08 * 1/kWh
  //   // So 1/tonne = (1/0.45359) * 1/MMBtu = (1/0.45359) * 293.08 * 1/kWh
  //   const expected = 293.08 / 0.45359;
  //   expect(result).toBeCloseTo(expected, 1);
  // });

  // test('1/m3 to 1/ccf conversion', () => {
  //   const result = convert(1).from('1/m3').to('1/ccf');
  //   // 1/therm = 2.8317 * 1/m3 and 1/therm = 1 * 1/ccf
  //   // So 1/m3 = (1/2.8317) * 1/therm = (1/2.8317) * 1/ccf
  //   const expected = 1 / 2.8317;
  //   expect(result).toBeCloseTo(expected, 3);
  // });

  // test('1/GJ to 1/MMBtu conversion', () => {
  //   const result = convert(1).from('1/GJ').to('1/MMBtu');
  //   expect(result).toBeCloseTo(0.9478, 3);
  // });

  // test('1/tonne to 1/klb conversion', () => {
  //   const result = convert(1).from('1/tonne').to('1/klb');
  //   expect(result).toBeCloseTo(2.2046, 3);
  // });

  // test('Large scale 1/kWh to 1/MMBtu conversion', () => {
  //   const result = convert(1000).from('1/kWh').to('1/MMBtu');
  //   expect(result).toBeCloseTo(3.412, 2);
  // });

  // test('Large scale 1/MMBtu to 1/kWh conversion', () => {
  //   const result = convert(50).from('1/MMBtu').to('1/kWh');
  //   expect(result).toBeCloseTo(14654, 0);
  // });

  // test('Industrial scale 1/ton-hr to 1/therm conversion', () => {
  //   const result = convert(100).from('1/ton-hr').to('1/therm');
  //   expect(result).toBeCloseTo(12, 1);
  // });

  // test('Commercial scale 1/therm to 1/ccf conversion', () => {
  //   const result = convert(250).from('1/therm').to('1/ccf');
  //   expect(result).toBeCloseTo(250, 1);
  // });

  // test('Utility scale 1/GJ to 1/MMBtu conversion', () => {
  //   const result = convert(500).from('1/GJ').to('1/MMBtu');
  //   expect(result).toBeCloseTo(473.9, 1);
  // });

  // test('Large residential 1/m3 to 1/kWh conversion', () => {
  //   const result = convert(1500).from('1/m3').to('1/kWh');
  //   const expected = 1500 * (29.308 / 2.8317);
  //   expect(result).toBeCloseTo(expected, 0);
  // });

  // test('Industrial mass 1/tonne to 1/kWh conversion', () => {
  //   const result = convert(75).from('1/tonne').to('1/kWh');
  //   const expected = 75 * (293.08 / 0.45359);
  //   expect(result).toBeCloseTo(expected, -1);
  // });

  // test('Power plant scale 1/klb to 1/ton-hr conversion', () => {
  //   const result = convert(2000).from('1/klb').to('1/ton-hr');
  //   expect(result).toBeCloseTo(166666.67, -2);
  // });

  // test('Decimal precision 1/kWh to 1/therm conversion', () => {
  //   const result = convert(0.5).from('1/kWh').to('1/therm');
  //   expect(result).toBeCloseTo(0.01706, 4);
  // });

  // test('Small fractions 1/MMBtu to 1/GJ conversion', () => {
  //   const result = convert(0.1).from('1/MMBtu').to('1/GJ');
  //   expect(result).toBeCloseTo(0.10551, 4);
  // });

  // test('Mixed scale cross-system 1/m3 to 1/ccf conversion', () => {
  //   const result = convert(850).from('1/m3').to('1/ccf');
  //   const expected = 850 * (1 / 2.8317);
  //   expect(result).toBeCloseTo(expected, 1);
  // });

  // test('Energy trading scale 1/ton-hr to 1/kWh conversion', () => {
  //   const result = convert(25).from('1/ton-hr').to('1/kWh');
  //   expect(result).toBeCloseTo(87.925, 2);
  // });

  // test('Large commercial 1/tonne to 1/MMBtu conversion', () => {
  //   const result = convert(150).from('1/tonne').to('1/MMBtu');
  //   const toKwh = 150 * (293.08 / 0.45359);
  //   const toMMBtu = toKwh * 0.003412;
  //   expect(result).toBeCloseTo(toMMBtu, 0);
  // });

  // test('Precision test with very small numbers', () => {
  //   const result = convert(0.001).from('1/kWh').to('1/ton-hr');
  //   expect(result).toBeCloseTo(0.00028433, 6);
  // });

  // test('High precision large scale conversion', () => {
  //   const result = convert(10000).from('1/therm').to('1/kWh');
  //   expect(result).toBeCloseTo(293080, -1);
  // });

  // test('20 1/GJ to 1/ccf', () => {
  //   const result = convert(20).from('1/GJ').to('1/ccf');

  // 20 1/gj to 1/therm = 20 * 0.10551 = 2.1102 1/therm
  // 2.1102 1/therm to 1/ccf = 2.1102 * 1 = 2.1102 1/ccf

  //   expect(result).toBeCloseTo(2.1102, 3);
  // });

  // test('20 1/GJ to 1/therm', () => {
  //   const result = convert(20).from('1/GJ').to('1/therm');

  //   expect(result).toBeCloseTo(2.1102, 3);
  // });

  // test('20 1/GJ to 1/kWh', () => {
  //   const result = convert(20).from('1/GJ').to('1/kWh');

  //   expect(result).toBeCloseTo(0.072000024);
  // });

  // test('0.072000024 1/kWh to 1/ton-hr', () => {
  //   const result = convert(0.072000024).from('1/kWh').to('1/ton-hr');

  //   expect(result).toBeCloseTo(0.253224084);
  // });

  // test('0.253224084 1/ton-hr to 1/therm', () => {
  //   const result = convert(0.253224084).from('1/ton-hr').to('1/therm');

  //   expect(result).toBeCloseTo(2.110200703);
  // });
});
