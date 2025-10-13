import { Measure, Unit } from './../index.js';

export type HeatingCoolingDegreeDaysUnits =
  | HeatingCoolingDegreeDaysMetric
  | HeatingCoolingDegreeDaysImperial;
export type HeatingCoolingDegreeDaysSystems = 'metric' | 'imperial';

export type HeatingCoolingDegreeDaysMetric = 'degC-days';
export type HeatingCoolingDegreeDaysImperial = 'degF-days';

const metric: Record<HeatingCoolingDegreeDaysMetric, Unit> = {
  'degC-days': {
    name: {
      singular: 'degree Celsius day',
      plural: 'degree Celsius days',
    },
    to_anchor: 1,
  },
};

const imperial: Record<HeatingCoolingDegreeDaysImperial, Unit> = {
  'degF-days': {
    name: {
      singular: 'degree Fahrenheit day',
      plural: 'degree Fahrenheit days',
    },
    to_anchor: 1,
  },
};

const measure: Measure<
  HeatingCoolingDegreeDaysSystems,
  HeatingCoolingDegreeDaysUnits
> = {
  systems: {
    metric,
    imperial,
  },
  anchors: {
    metric: {
      imperial: {
        transform: (degC: number) => 1.8 * degC + 32,
      },
    },
    imperial: {
      metric: {
        transform: (degF: number) => (degF - 32) / 1.8,
      },
    },
  },
};

export default measure;
