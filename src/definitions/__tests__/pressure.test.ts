import configureMeasurements from '../..';
import pressure, { PressureSystems, PressureUnits } from '../pressure';

test('Pa to Pa', () => {
  const convert = configureMeasurements<
    'pressure',
    PressureSystems,
    PressureUnits
  >({
    pressure,
  });
  expect(convert(1).from('Pa').to('Pa')).toBe(1);
});

test('in. w.c to in. w.c', () => {
  const convert = configureMeasurements<
    'pressure',
    PressureSystems,
    PressureUnits
  >({
    pressure,
  });
  expect(convert(1).from('in. w.c').to('in. w.c')).toBe(1);
});

test('20 in. w.c to Pa', () => {
  const convert = configureMeasurements<
    'pressure',
    PressureSystems,
    PressureUnits
  >({
    pressure,
  });
  expect(convert(20).from('in. w.c').to('Pa')).toBeCloseTo(4981.8);
});

test('33 Pa to in. w.c', () => {
  const convert = configureMeasurements<
    'pressure',
    PressureSystems,
    PressureUnits
  >({
    pressure,
  });
  expect(convert(33).from('Pa').to('in. w.c')).toBeCloseTo(0.1324818);
});
