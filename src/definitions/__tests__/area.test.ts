import configureMeasurements from '../..';
import area, { AreaSystems, AreaUnits } from '../area';

test('ft2 to ft2', () => {
  const convert = configureMeasurements<'area', AreaSystems, AreaUnits>({
    area,
  });
  expect(convert(1).from('ft2').to('ft2')).toBe(1);
});

test('m2 to m2', () => {
  const convert = configureMeasurements<'area', AreaSystems, AreaUnits>({
    area,
  });
  expect(convert(1).from('m2').to('m2')).toBe(1);
});

test('ft2 to m2', () => {
  const convert = configureMeasurements<'area', AreaSystems, AreaUnits>({
    area,
  });
  expect(convert(1).from('ft2').to('m2')).toBeCloseTo(0.09290304);
});

test('m2 to ft2', () => {
  const convert = configureMeasurements<'area', AreaSystems, AreaUnits>({
    area,
  });
  expect(convert(1).from('m2').to('ft2')).toBeCloseTo(10.7639);
});
