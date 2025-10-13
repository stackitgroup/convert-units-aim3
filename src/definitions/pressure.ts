import { Measure, Unit } from './../index.js';
export type PressureUnits = PressureMetricUnits | PressureImperialUnits;
export type PressureSystems = 'metric' | 'imperial';

export type PressureMetricUnits = 'Pa';
export type PressureImperialUnits = 'in. w.c';

const metric: Record<PressureMetricUnits, Unit> = {
  Pa: {
    name: {
      singular: 'pascal',
      plural: 'pascals',
    },
    to_anchor: 1,
  },
};

const imperial: Record<PressureImperialUnits, Unit> = {
  'in. w.c': {
    name: {
      singular: 'Inch of Water Column',
      plural: 'Inches of Water Column',
    },
    to_anchor: 1,
  },
};

const measure: Measure<PressureSystems, PressureUnits> = {
  systems: {
    metric,
    imperial,
  },
  anchors: {
    metric: {
      imperial: {
        ratio: 0.0040146,
      },
    },
    imperial: {
      metric: {
        ratio: 249.09,
      },
    },
  },
};

export default measure;
