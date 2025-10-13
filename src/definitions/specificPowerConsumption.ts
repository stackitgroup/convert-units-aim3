import { Measure, Unit } from '../index.js';

export type SpecificPowerConsumptionUnits =
  | SpecificPowerConsumptionMetricUnits
  | SpecificPowerConsumptionImperialUnits;
export type SpecificPowerConsumptionSystems = 'metric' | 'imperial';

export type SpecificPowerConsumptionMetricUnits = 'kW/(1000L/s)';
export type SpecificPowerConsumptionImperialUnits = 'hp/1000cfm';

const metric: Record<SpecificPowerConsumptionMetricUnits, Unit> = {
  'kW/(1000L/s)': {
    name: {
      singular: 'kilowatt per 1000 litres per second',
      plural: 'kilowatts per 1000 litres per second',
    },
    to_anchor: 1,
  },
};

const imperial: Record<SpecificPowerConsumptionImperialUnits, Unit> = {
  'hp/1000cfm': {
    name: {
      singular: 'horsepower per 1000 cubic feet per minute',
      plural: 'horsepower per 1000 cubic feet per minute',
    },
    to_anchor: 1,
  },
};

const measure: Measure<
  SpecificPowerConsumptionSystems,
  SpecificPowerConsumptionUnits
> = {
  systems: {
    metric,
    imperial,
  },
  anchors: {
    metric: {
      imperial: {
        ratio: 0.63289,
      },
    },
    imperial: {
      metric: {
        ratio: 1.5801,
      },
    },
  },
};

export default measure;
