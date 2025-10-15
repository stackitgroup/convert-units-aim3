import { Measure, Unit } from './../index.js';
export type EnergyUnits = EnergyMetricUnits | EnergyImperialUnits;
export type EnergySystems = 'metric' | 'imperial';

export type EnergyMetricUnits = 'kWh';
export type EnergyImperialUnits = 'MMBtu' | 'kBtu' | 'Therms' | 'Ton-hours';

const metric: Record<EnergyMetricUnits, Unit> = {
  kWh: {
    name: {
      singular: 'Kilowatt-hour',
      plural: 'Kilowatt-hours',
    },
    to_anchor: 1,
  },
};

const imperial: Record<EnergyImperialUnits, Unit> = {
  MMBtu: {
    name: {
      singular: 'Million British thermal unit',
      plural: 'Million British thermal units',
    },
    to_anchor: 1,
  },
  kBtu: {
    name: {
      singular: 'Thousand British thermal unit',
      plural: 'Thousand British thermal units',
    },
    to_anchor: 0.001,
  },
  Therms: {
    name: {
      singular: 'Therm',
      plural: 'Therms',
    },
    to_anchor: 0.1,
  },
  'Ton-hours': {
    name: {
      singular: 'Ton-hour',
      plural: 'Ton-hours',
    },
    to_anchor: 0.012,
  },
};

const measure: Measure<EnergySystems, EnergyUnits> = {
  systems: {
    metric,
    imperial,
  },
  anchors: {
    metric: {
      imperial: {
        ratio: 0.003412,
      },
    },
    imperial: {
      metric: {
        ratio: 293.08,
      },
    },
  },
};

export default measure;
