import configureMeasurements from '../..';
import volume, { VolumeSystems, VolumeUnits } from '../volume';

test('gal to gal', () => {
  const convert = configureMeasurements<'volume', VolumeSystems, VolumeUnits>({
    volume,
  });
  expect(convert(1).from('gal').to('gal')).toBe(1);
});

test('m3 to m3', () => {
  const convert = configureMeasurements<'volume', VolumeSystems, VolumeUnits>({
    volume,
  });
  expect(convert(1).from('m3').to('m3')).toBe(1);
});

test('gal to m3', () => {
  const convert = configureMeasurements<'volume', VolumeSystems, VolumeUnits>({
    volume,
  });
  expect(convert(1).from('gal').to('m3')).toBeCloseTo(0.00378541);
});

test('5 gal to m3', () => {
  const convert = configureMeasurements<'volume', VolumeSystems, VolumeUnits>({
    volume,
  });
  expect(convert(5).from('gal').to('m3')).toBeCloseTo(0.01892705);
});

test('10 gal to m3', () => {
  const convert = configureMeasurements<'volume', VolumeSystems, VolumeUnits>({
    volume,
  });
  expect(convert(10).from('gal').to('m3')).toBeCloseTo(0.0378541);
});

test('100 gal to m3', () => {
  const convert = configureMeasurements<'volume', VolumeSystems, VolumeUnits>({
    volume,
  });
  expect(convert(100).from('gal').to('m3')).toBeCloseTo(0.378541);
});

test('m3 to gal', () => {
  const convert = configureMeasurements<'volume', VolumeSystems, VolumeUnits>({
    volume,
  });
  expect(convert(1).from('m3').to('gal')).toBeCloseTo(264.172);
});

test('0.5 m3 to gal', () => {
  const convert = configureMeasurements<'volume', VolumeSystems, VolumeUnits>({
    volume,
  });
  expect(convert(0.5).from('m3').to('gal')).toBeCloseTo(132.086);
});

test('2 m3 to gal', () => {
  const convert = configureMeasurements<'volume', VolumeSystems, VolumeUnits>({
    volume,
  });
  expect(convert(2).from('m3').to('gal')).toBeCloseTo(528.344);
});

test('10 m3 to gal', () => {
  const convert = configureMeasurements<'volume', VolumeSystems, VolumeUnits>({
    volume,
  });
  expect(convert(10).from('m3').to('gal')).toBeCloseTo(2641.72);
});

test('0.1 m3 to gal', () => {
  const convert = configureMeasurements<'volume', VolumeSystems, VolumeUnits>({
    volume,
  });
  expect(convert(0.1).from('m3').to('gal')).toBeCloseTo(26.4172);
});
