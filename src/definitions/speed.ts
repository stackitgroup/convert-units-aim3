import { Measure, Unit } from './../index.js';
export type SpeedUnits = SpeedMetricUnits | SpeedImperialUnits;
export type SpeedSystems = 'metric' | 'imperial';

export type SpeedMetricUnits = 'm/s';
export type SpeedImperialUnits = 'ft/min';

const metric: Record<SpeedMetricUnits, Unit> = {
  'm/s': {
    name: {
      singular: 'Metre per second',
      plural: 'Metres per second',
    },
    to_anchor: 1,
  },
};

const imperial: Record<SpeedImperialUnits, Unit> = {
  'ft/min': {
    name: {
      singular: 'Foot per minute',
      plural: 'Feet per minute',
    },
    to_anchor: 1,
  },
};

const measure: Measure<SpeedSystems, SpeedUnits> = {
  systems: {
    metric,
    imperial,
  },
  anchors: {
    metric: {
      imperial: {
        ratio: 196.85,
      },
    },
    imperial: {
      metric: {
        ratio: 0.00508,
      },
    },
  },
};

export default measure;
