import configureMeasurements from '..';
import allMeasures, {
  AllMeasures,
  AllMeasuresSystems,
  AllMeasuresUnits,
} from '../definitions/all';
import energy, { EnergySystems, EnergyUnits } from '../definitions/energy';
import length, { LengthSystems, LengthUnits } from '../definitions/length';
import speed, { SpeedSystems, SpeedUnits } from '../definitions/speed';
import volumeFlowRate, {
  VolumeFlowRateSystems,
  VolumeFlowRateUnits,
} from '../definitions/volumeFlowRate';

test('volume flow rate possibilities', () => {
  const convert = configureMeasurements<
    'volumeFlowRate',
    VolumeFlowRateSystems,
    VolumeFlowRateUnits
  >({
    volumeFlowRate,
  });
  const actual = convert().possibilities('volumeFlowRate'),
    expected = ['l/s', 'cfm'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('length possibilities', () => {
  const convert = configureMeasurements<'length', LengthSystems, LengthUnits>({
    length,
  });
  const actual = convert().possibilities('length'),
    expected = ['m', 'ft'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('speed possibilities', () => {
  const convert = configureMeasurements<'speed', SpeedSystems, SpeedUnits>({
    speed,
  });
  const actual = convert().possibilities('speed'),
    expected = ['m/s', 'ft/min'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('energy possibilities', () => {
  const convert = configureMeasurements<'energy', EnergySystems, EnergyUnits>({
    energy,
  });
  const actual = convert().possibilities('energy'),
    expected = ['kWh', 'MMBtu', 'Therms', 'Ton-hours'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('all possibilities', () => {
  const convert = configureMeasurements<
    AllMeasures,
    AllMeasuresSystems,
    AllMeasuresUnits
  >(allMeasures);
  const actual = convert().possibilities(),
    // Please keep these sorted for maintainability
    expected = [
      '1/GJ',
      '1/MMBtu',
      '1/ccf',
      '1/kWh',
      '1/klb',
      '1/m3',
      '1/therm',
      '1/ton-hr',
      '1/tonne',
      'ACH',
      'ACM',
      'ACS',
      'MMBtu',
      'Pa',
      'Therms',
      'Ton-hours',
      'W/ft2',
      'W/m2',
      'cfm',
      'degC-days',
      'degF-days',
      'ft',
      'ft/min',
      'ft2',
      'hp/1000cfm',
      'in. w.c',
      'kBtu/ft2',
      'kW/(1000L/s)',
      'kWh',
      'kWh/ft2',
      'kWh/m2',
      'l/s',
      'm',
      'm/s',
      'm2',
    ];
  expect(actual.sort()).toEqual(expected.sort());
});
