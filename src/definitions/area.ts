import { Measure, Unit } from './../index.js';
export type AreaUnits = AreaMetricUnits | AreaImperialUnits;
export type AreaSystems = 'metric' | 'imperial';

export type AreaMetricUnits = 'm2';
export type AreaImperialUnits = 'ft2';

const metric: Record<AreaMetricUnits, Unit> = {
  m2: {
    name: {
      singular: 'Square Meter',
      plural: 'Square Meters',
    },
    to_anchor: 1,
  },
};

const imperial: Record<AreaImperialUnits, Unit> = {
  ft2: {
    name: {
      singular: 'Square Foot',
      plural: 'Square Feet',
    },
    to_anchor: 1,
  },
};

const measure: Measure<AreaSystems, AreaUnits> = {
  systems: {
    metric,
    imperial,
  },
  anchors: {
    metric: {
      imperial: {
        ratio: 10.764,
      },
    },
    imperial: {
      metric: {
        ratio: 0.0929,
      },
    },
  },
};

export default measure;
