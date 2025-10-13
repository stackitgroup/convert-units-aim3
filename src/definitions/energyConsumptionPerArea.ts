import { Measure, Unit } from './../index.js';
export type EnergyConsumptionPerAreaUnits =
  | EnergyConsumptionPerAreaMetricUnits
  | EnergyConsumptionPerAreaImperialUnits;
export type EnergyConsumptionPerAreaSystems = 'metric' | 'imperial';

export type EnergyConsumptionPerAreaMetricUnits = 'kWh/m2';
export type EnergyConsumptionPerAreaImperialUnits = 'kWh/ft2' | 'kBtu/ft2';

const metric: Record<EnergyConsumptionPerAreaMetricUnits, Unit> = {
  'kWh/m2': {
    name: {
      singular: 'Kilo-watt-hour per Square Meter',
      plural: 'Kilo-watt-hours per Square Meters',
    },
    to_anchor: 1,
  },
};

const imperial: Record<EnergyConsumptionPerAreaImperialUnits, Unit> = {
  'kBtu/ft2': {
    name: {
      singular: 'Kilo-British thermal units per Square Foot',
      plural: 'Kilo-British thermal units per Square Feet',
    },
    to_anchor: 1,
  },
  'kWh/ft2': {
    name: {
      singular: 'Kilo-watt-hours per Square Foot',
      plural: 'Kilo-watt-hours per Square Feet',
    },
    to_anchor: 3.412, // 1 kWh/ft2 = 3.412 kBtu/ft2
  },
};

const measure: Measure<
  EnergyConsumptionPerAreaSystems,
  EnergyConsumptionPerAreaUnits
> = {
  systems: {
    metric,
    imperial,
  },
  anchors: {
    metric: {
      imperial: {
        ratio: 0.31699, // kWh/m2 to kBtu/ft2: kWh/m2 * 0.31699 = kBtu/ft2
      },
    },
    imperial: {
      metric: {
        ratio: 3.1547, // kBtu/ft2 to kWh/m2: kBtu/ft2 * 3.1547 = kWh/m2
      },
    },
  },
};

export default measure;
