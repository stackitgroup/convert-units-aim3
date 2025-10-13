import configureMeasurements from '../..';
import specificPowerConsumption, {
  SpecificPowerConsumptionSystems,
  SpecificPowerConsumptionUnits,
} from '../specificPowerConsumption';

test('2.5 kW/(1000L/s) to hp/1000cfm', () => {
  const convert = configureMeasurements<
    'specificPowerConsumption',
    SpecificPowerConsumptionSystems,
    SpecificPowerConsumptionUnits
  >({
    specificPowerConsumption,
  });

  expect(convert(2.5).from('kW/(1000L/s)').to('hp/1000cfm')).toBeCloseTo(
    1.582225
  );
});

test('5 hp/1000cfm to kW/(1000L/s)', () => {
  const convert = configureMeasurements<
    'specificPowerConsumption',
    SpecificPowerConsumptionSystems,
    SpecificPowerConsumptionUnits
  >({
    specificPowerConsumption,
  });

  expect(convert(5).from('hp/1000cfm').to('kW/(1000L/s)')).toBeCloseTo(7.9005);
});

test('hp/1000cfm to hp/1000cfm', () => {
  const convert = configureMeasurements<
    'specificPowerConsumption',
    SpecificPowerConsumptionSystems,
    SpecificPowerConsumptionUnits
  >({
    specificPowerConsumption,
  });

  expect(convert(1).from('hp/1000cfm').to('hp/1000cfm')).toBe(1);
});

test('kW/(1000L/s) to kW/(1000L/s)', () => {
  const convert = configureMeasurements<
    'specificPowerConsumption',
    SpecificPowerConsumptionSystems,
    SpecificPowerConsumptionUnits
  >({
    specificPowerConsumption,
  });

  expect(convert(1).from('kW/(1000L/s)').to('kW/(1000L/s)')).toBe(1);
});
