import { Measure, Unit } from './../index.js';
export type LengthUnits = LengthMetricUnits | LengthImperialUnits;
export type LengthSystems = 'metric' | 'imperial';

export type LengthMetricUnits = 'm';
export type LengthImperialUnits = 'ft';

const metric: Record<LengthMetricUnits, Unit> = {
  m: {
    name: {
      singular: 'Meter',
      plural: 'Meters',
    },
    to_anchor: 1,
  },
};

const imperial: Record<LengthImperialUnits, Unit> = {
  ft: {
    name: {
      singular: 'Foot',
      plural: 'Feet',
    },
    to_anchor: 1,
  },
};

const measure: Measure<LengthSystems, LengthUnits> = {
  systems: {
    metric,
    imperial,
  },
  anchors: {
    metric: {
      imperial: {
        ratio: 3.2808,
      },
    },
    imperial: {
      metric: {
        ratio: 0.3048,
      },
    },
  },
};

export default measure;
