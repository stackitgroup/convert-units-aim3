import configureMeasurements from '..';
import allMeasures, {
  AllMeasures,
  AllMeasuresSystems,
  AllMeasuresUnits,
} from '../definitions/all';

test('measures', () => {
  const convert = configureMeasurements<
    AllMeasures,
    AllMeasuresSystems,
    AllMeasuresUnits
  >(allMeasures);
  const actual = convert().measures(),
    expected = [
      'area',
      'energyConsumptionPerArea',
      'heatingCoolingDegreeDays',
      'ventilationRate',
      'volume',
      'energy',
      'length',
      'oneOverEnergy',
      'specificPowerConsumption',
      'powerDensity',
      'pressure',
      'speed',
      'temperature',
      'volumeFlowRate',
    ];
  expect(actual.sort()).toEqual(expected.sort());
});
