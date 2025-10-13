import configureMeasurements from '../..';
import length, { LengthSystems, LengthUnits } from '../length';

test('ft to ft', () => {
  const convert = configureMeasurements<'length', LengthSystems, LengthUnits>({
    length,
  });
  expect(convert(1).from('ft').to('ft')).toBe(1);
});

test('m to m', () => {
  const convert = configureMeasurements<'length', LengthSystems, LengthUnits>({
    length,
  });
  expect(convert(1).from('m').to('m')).toBe(1);
});

test('ft to m', () => {
  const convert = configureMeasurements<'length', LengthSystems, LengthUnits>({
    length,
  });
  expect(convert(15).from('ft').to('m')).toBeCloseTo(4.572);
});

test('m to ft', () => {
  const convert = configureMeasurements<'length', LengthSystems, LengthUnits>({
    length,
  });
  expect(convert(23).from('m').to('ft')).toBeCloseTo(75.4584);
});
