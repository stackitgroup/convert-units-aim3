import configureMeasurements from '../..';
import volumeFlowRate, {
  VolumeFlowRateSystems,
  VolumeFlowRateUnits,
} from '../volumeFlowRate';

test('l/s to l/s', () => {
  const convert = configureMeasurements<
    'volumeFlowRate',
    VolumeFlowRateSystems,
    VolumeFlowRateUnits
  >({
    volumeFlowRate,
  });
  expect(convert(1).from('l/s').to('l/s')).toBe(1);
});

test('cfm to cfm', () => {
  const convert = configureMeasurements<
    'volumeFlowRate',
    VolumeFlowRateSystems,
    VolumeFlowRateUnits
  >({
    volumeFlowRate,
  });
  expect(convert(1).from('cfm').to('cfm')).toBe(1);
});

test('10 l/s to cfm', () => {
  const convert = configureMeasurements<
    'volumeFlowRate',
    VolumeFlowRateSystems,
    VolumeFlowRateUnits
  >({
    volumeFlowRate,
  });

  expect(convert(10).from('l/s').to('cfm')).toBeCloseTo(21.189);
});

test('25 cfm to l/s', () => {
  const convert = configureMeasurements<
    'volumeFlowRate',
    VolumeFlowRateSystems,
    VolumeFlowRateUnits
  >({
    volumeFlowRate,
  });

  expect(convert(25).from('cfm').to('l/s')).toBeCloseTo(11.79875);
});
