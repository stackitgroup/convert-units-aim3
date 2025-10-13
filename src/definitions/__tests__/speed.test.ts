import configureMeasurements from '../..';
import speed, { SpeedSystems, SpeedUnits } from '../speed';

test('1 m/s to m/s', () => {
  const convert = configureMeasurements<'speed', SpeedSystems, SpeedUnits>({
    speed,
  });
  expect(convert(1).from('m/s').to('m/s')).toBe(1);
});

test('1 m/s to ft/min', () => {
  const convert = configureMeasurements<'speed', SpeedSystems, SpeedUnits>({
    speed,
  });
  expect(convert(1).from('m/s').to('ft/min')).toBeCloseTo(196.85);
});

test('14 ft/min to m/s', () => {
  const convert = configureMeasurements<'speed', SpeedSystems, SpeedUnits>({
    speed,
  });
  expect(convert(14).from('ft/min').to('m/s')).toBeCloseTo(0.0712);
});

test('23 m/s to ft/min', () => {
  const convert = configureMeasurements<'speed', SpeedSystems, SpeedUnits>({
    speed,
  });
  expect(convert(23).from('m/s').to('ft/min')).toBeCloseTo(4527.55);
});
