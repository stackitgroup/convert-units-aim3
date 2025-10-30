import { Measure, Unit } from '../index.js';

export type TemperatureUnits =
  | TemperatureMetric
  | TemperatureImperial;
export type TemperatureSystems = 'metric' | 'imperial';

export type TemperatureMetric = 'degC';
export type TemperatureImperial = 'degF';

const metric: Record<TemperatureMetric, Unit> = {
  'degC': {
    name: {
      singular: 'degree Celsius',
      plural: 'degrees Celsius',
    },
    to_anchor: 1,
  },
};

const imperial: Record<TemperatureImperial, Unit> = {
  'degF': {
    name: {
      singular: 'degree Fahrenheit',
      plural: 'degrees Fahrenheit',
    },
    to_anchor: 1,
  },
};

const measure: Measure<
  TemperatureSystems,
  TemperatureUnits
> = {
  systems: {
    metric,
    imperial,
  },
  anchors: {
    metric: {
      imperial: {
        transform: <T>(degC: T) => (1.8 * (degC as number) + 32) as T,
      },
    },
    imperial: {
      metric: {
        transform: <T>(degF: T) => (((degF as number) - 32) / 1.8) as T,
      },
    },
  },
};

export default measure;
