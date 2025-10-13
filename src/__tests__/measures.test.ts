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
      'currency',
      'energyConsumptionPerArea',
      'heatingCoolingDegreeDays',
      'ventilationRate',
      'energy',
      'length',
      'powerDensity',
      'pressure',
      'speed',
      'volumeFlowRate',
    ];
  expect(actual.sort()).toEqual(expected.sort());
});
