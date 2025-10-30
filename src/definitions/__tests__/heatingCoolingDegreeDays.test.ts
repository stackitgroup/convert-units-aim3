import configureMeasurements from '../..';
import heatingCoolingDegreeDays, {
  HeatingCoolingDegreeDaysSystems,
  HeatingCoolingDegreeDaysUnits,
} from '../heatingCoolingDegreeDays';

test('degC-days to degF-days', () => {
  const convert = configureMeasurements<
    'heatingCoolingDegreeDays',
    HeatingCoolingDegreeDaysSystems,
    HeatingCoolingDegreeDaysUnits
  >({
    heatingCoolingDegreeDays,
  });

  expect(convert(20).from('degC-days').to('degF-days')).toBe(36);
});

test('degF-days to degC-days', () => {
  const convert = configureMeasurements<
    'heatingCoolingDegreeDays',
    HeatingCoolingDegreeDaysSystems,
    HeatingCoolingDegreeDaysUnits
  >({
    heatingCoolingDegreeDays,
  });

  expect(convert(800).from('degF-days').to('degC-days')).toBeCloseTo(444.4444, 2);
});

test('95.3 degF-days to degC-days', () => {
  const convert = configureMeasurements<
    'heatingCoolingDegreeDays',
    HeatingCoolingDegreeDaysSystems,
    HeatingCoolingDegreeDaysUnits
  >({
    heatingCoolingDegreeDays,
  });

  expect(convert(95.3).from('degF-days').to('degC-days')).toBeCloseTo(52.9444, 2);
});

test('3 degF-days to degC-days', () => {
  const convert = configureMeasurements<
    'heatingCoolingDegreeDays',
    HeatingCoolingDegreeDaysSystems,
    HeatingCoolingDegreeDaysUnits
  >({
    heatingCoolingDegreeDays,
  });

  expect(convert(3).from('degF-days').to('degC-days')).toBeCloseTo(1.6667, 2);
});
