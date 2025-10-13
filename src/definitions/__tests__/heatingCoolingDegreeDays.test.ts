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

  expect(convert(20).from('degC-days').to('degF-days')).toBe(68);
});

test('degF-days to degC-days', () => {
  const convert = configureMeasurements<
    'heatingCoolingDegreeDays',
    HeatingCoolingDegreeDaysSystems,
    HeatingCoolingDegreeDaysUnits
  >({
    heatingCoolingDegreeDays,
  });

  expect(convert(800).from('degF-days').to('degC-days')).toBeCloseTo(426.6667);
});
