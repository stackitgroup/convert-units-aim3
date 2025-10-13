import configureMeasurements from '../..';
import energyConsumptionPerArea, {
  EnergyConsumptionPerAreaSystems,
  EnergyConsumptionPerAreaUnits,
} from '../energyConsumptionPerArea';

test('10 kWh/ft2 to kBtu/ft2', () => {
  const convert = configureMeasurements<
    'energyConsumptionPerArea',
    EnergyConsumptionPerAreaSystems,
    EnergyConsumptionPerAreaUnits
  >({
    energyConsumptionPerArea,
  });

  expect(convert(10).from('kWh/ft2').to('kBtu/ft2')).toBeCloseTo(34.12);
});

test('18 kBtu/ft2 to kWh/ft2', () => {
  const convert = configureMeasurements<
    'energyConsumptionPerArea',
    EnergyConsumptionPerAreaSystems,
    EnergyConsumptionPerAreaUnits
  >({
    energyConsumptionPerArea,
  });

  expect(convert(18).from('kBtu/ft2').to('kWh/ft2')).toBeCloseTo(5.2754);
});

test('10 kBtu/ft2 to kWh/m2', () => {
  const convert = configureMeasurements<
    'energyConsumptionPerArea',
    EnergyConsumptionPerAreaSystems,
    EnergyConsumptionPerAreaUnits
  >({
    energyConsumptionPerArea,
  });

  expect(convert(10).from('kBtu/ft2').to('kWh/m2')).toBeCloseTo(31.547);
});

test('23 kWh/m2 to kBtu/ft2', () => {
  const convert = configureMeasurements<
    'energyConsumptionPerArea',
    EnergyConsumptionPerAreaSystems,
    EnergyConsumptionPerAreaUnits
  >({
    energyConsumptionPerArea,
  });

  expect(convert(23).from('kWh/m2').to('kBtu/ft2')).toBeCloseTo(7.29077);
});
