import { Measure, Unit } from '../index.js';
export type OneOverEnergyUnits =
  | OneOverEnergyMetricUnits
  | OneOverEnergyImperialUnits;
export type OneOverEnergySystems = 'metric' | 'imperial';

export type OneOverEnergyMetricUnits = '1/kWh' | '1/m3' | '1/GJ' | '1/tonne';
export type OneOverEnergyImperialUnits =
  | '1/ton-hr'
  | '1/MMBtu'
  | '1/therm'
  | '1/ccf'
  | '1/klb';

const metric: Record<OneOverEnergyMetricUnits, Unit> = {
  '1/kWh': {
    name: {
      singular: 'One over Kilowatt Hour',
      plural: 'One over Kilowatt Hours',
    },
    to_anchor: 1,
  },
  '1/m3': {
    name: {
      singular: 'One over Cubic Meter',
      plural: 'One over Cubic Meters',
    },
    to_anchor: 29.308 * 2.8317, // 1/m3 → 1/therm (×2.8317) → 1/kWh (×29.308), so 1/m3 = 29.308 * 2.8317 * 1/kWh
  },
  '1/GJ': {
    name: {
      singular: 'One over Gigajoule',
      plural: 'One over Gigajoules',
    },
    to_anchor: 1.0551 * 0.003412, // 1/GJ → 1/MMBtu (×1.0551) → 1/kWh (×293.08), so 1/GJ = 293.08 * 1.0551 * 1/kWh
  },
  '1/tonne': {
    name: {
      singular: 'One over Metric Tonne',
      plural: 'One over Metric Tonnes',
    },
    to_anchor: 293.08 * 0.45359, // 1/tonne → 1/MMBtu (×0.45359) → 1/kWh (×293.08), so 1/tonne = 293.08 * 0.45359 * 1/kWh
  },
};

const imperial: Record<OneOverEnergyImperialUnits, Unit> = {
  '1/MMBtu': {
    name: {
      singular: 'One over Million British Thermal Unit',
      plural: 'One over Million British Thermal Units',
    },
    to_anchor: 1,
  },
  '1/ton-hr': {
    name: {
      singular: 'One over Ton Hour',
      plural: 'One over Ton Hours',
    },
    to_anchor: 1,
  },
  '1/therm': {
    name: {
      singular: 'One over Therm',
      plural: 'One over Therms',
    },
    to_anchor: (1 / 0.012) * 0.1,
  },
  '1/ccf': {
    name: {
      singular: 'One over Centum Cubic Feet',
      plural: 'One over Centum Cubic Feet',
    },
    to_anchor: 1 * 0.1 * 0.012, // 1/ccf → 1/therm (×1) → 1/MMBtu (×0.1) → 1/ton-hr (×0.012)
  },
  '1/klb': {
    name: {
      singular: 'One over Kilo Pound',
      plural: 'One over Kilo Pounds',
    },
    to_anchor: 1 * 0.012, // 1/klb → 1/MMBtu (×1) → 1/ton-hr (×0.012)
  },
};

const measure: Measure<OneOverEnergySystems, OneOverEnergyUnits> = {
  systems: {
    metric,
    imperial,
  },
  anchors: {
    metric: {
      imperial: {
        ratio: 3.517,
      },
    },
    imperial: {
      metric: {
        ratio: 0.28433,
      },
    },
  },
};

export default measure;
