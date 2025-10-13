import { Measure, Unit } from './../index.js';
export type VolumeFlowRateUnits =
  | VolumeFlowRateMetricUnits
  | VolumeFlowRateImperialUnits;
export type VolumeFlowRateSystems = 'metric' | 'imperial';

export type VolumeFlowRateMetricUnits = 'l/s';

export type VolumeFlowRateImperialUnits = 'cfm';

const metric: Record<VolumeFlowRateMetricUnits, Unit> = {
  'l/s': {
    name: {
      singular: 'Litre per second',
      plural: 'Litres per second',
    },
    to_anchor: 1,
  },
};

const imperial: Record<VolumeFlowRateImperialUnits, Unit> = {
  cfm: {
    name: {
      singular: 'Cubic foot per minute',
      plural: 'Cubic feet per minute',
    },
    to_anchor: 1,
  },
};

const measure: Measure<VolumeFlowRateSystems, VolumeFlowRateUnits> = {
  systems: {
    metric,
    imperial,
  },
  anchors: {
    metric: {
      imperial: {
        ratio: 2.1189,
      },
    },
    imperial: {
      metric: {
        ratio: 0.47195,
      },
    },
  },
};

export default measure;
