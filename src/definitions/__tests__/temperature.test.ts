import configureMeasurements from '../..';
import temperature, {
  TemperatureSystems,
  TemperatureUnits,
} from '../temperature';

test('degC to degF', () => {
  const convert = configureMeasurements<
    'temperature',
    TemperatureSystems,
    TemperatureUnits
  >({
    temperature: temperature,
  });

  expect(convert(20).from('degC').to('degF')).toBe(68);
});

test('degF to degC', () => {
  const convert = configureMeasurements<
    'temperature',
    TemperatureSystems,
    TemperatureUnits
  >({
    temperature: temperature,
  });

  expect(convert(800).from('degF').to('degC')).toBeCloseTo(426.6667);
});

test('73 degF to degC should be 22.8', () => {
  const convert = configureMeasurements<
    'temperature',
    TemperatureSystems,
    TemperatureUnits
  >({
    temperature: temperature,
  });

  expect(convert(73).from('degF').to('degC')).toBeCloseTo(22.8, 1);
});

test('71 degF to degC should be 21.7', () => {
  const convert = configureMeasurements<
    'temperature',
    TemperatureSystems,
    TemperatureUnits
  >({
    temperature: temperature,
  });

  expect(convert(71).from('degF').to('degC')).toBeCloseTo(21.7, 1);
});

test('55 degF to degC should be 12.8', () => {
  const convert = configureMeasurements<
    'temperature',
    TemperatureSystems,
    TemperatureUnits
  >({
    temperature: temperature,
  });

  expect(convert(55).from('degF').to('degC')).toBeCloseTo(12.8, 1);
});

test('75 degF to degC should be 23.9', () => {
  const convert = configureMeasurements<
    'temperature',
    TemperatureSystems,
    TemperatureUnits
  >({
    temperature: temperature,
  });

  expect(convert(75).from('degF').to('degC')).toBeCloseTo(23.9, 1);
});
