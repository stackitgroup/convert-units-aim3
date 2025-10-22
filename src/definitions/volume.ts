import { Measure, Unit } from './../index.js';
export type VolumeUnits = VolumeMetricUnits | VolumeImperialUnits;
export type VolumeSystems = 'metric' | 'imperial';

export type VolumeMetricUnits = 'm3';
export type VolumeImperialUnits = 'gal';

const metric: Record<VolumeMetricUnits, Unit> = {
  m3: {
    name: {
      singular: 'Cubic Meter',
      plural: 'Cubic Meters',
    },
    to_anchor: 1,
  },
};

const imperial: Record<VolumeImperialUnits, Unit> = {
  gal: {
    name: {
      singular: 'Gallon',
      plural: 'Gallons',
    },
    to_anchor: 1,
  },
};

const measure: Measure<VolumeSystems, VolumeUnits> = {
  systems: {
    metric,
    imperial,
  },
  anchors: {
    metric: {
      imperial: {
        ratio: 264.172,
      },
    },
    imperial: {
      metric: {
        ratio: 0.00378541,
      },
    },
  },
};

export default measure;
