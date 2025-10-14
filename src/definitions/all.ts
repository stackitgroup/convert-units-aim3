import { Measure } from '../convert.js';
import area, { AreaSystems, AreaUnits } from './area.js';
import energy, { EnergySystems, EnergyUnits } from './energy.js';
import energyConsumptionPerArea, {
  EnergyConsumptionPerAreaSystems,
  EnergyConsumptionPerAreaUnits,
} from './energyConsumptionPerArea.js';
import heatingCoolingDegreeDays, {
  HeatingCoolingDegreeDaysSystems,
  HeatingCoolingDegreeDaysUnits,
} from './heatingCoolingDegreeDays.js';
import length, { LengthSystems, LengthUnits } from './length.js';
import powerDensity, {
  PowerDensitySystems,
  PowerDensityUnits,
} from './powerDensity.js';
import pressure, { PressureSystems, PressureUnits } from './pressure.js';
import speed, { SpeedSystems, SpeedUnits } from './speed.js';
import ventilationRate, {
  VentilationRateSystems,
  VentilationRateUnits,
} from './ventilationRate.js';
import volumeFlowRate, {
  VolumeFlowRateSystems,
  VolumeFlowRateUnits,
} from './volumeFlowRate.js';

export type AllMeasuresSystems =
  | AreaSystems
  | VentilationRateSystems
  | EnergyConsumptionPerAreaSystems
  | HeatingCoolingDegreeDaysSystems
  | EnergySystems
  | LengthSystems
  | PowerDensitySystems
  | PressureSystems
  | SpeedSystems
  | VolumeFlowRateSystems;

export type AllMeasuresUnits =
  | AreaUnits
  | VentilationRateUnits
  | EnergyConsumptionPerAreaUnits
  | HeatingCoolingDegreeDaysUnits
  | EnergyUnits
  | LengthUnits
  | PowerDensityUnits
  | PressureUnits
  | SpeedUnits
  | VolumeFlowRateUnits;

export type AllMeasures =
  | 'area'
  | 'ventilationRate'
  | 'energyConsumptionPerArea'
  | 'heatingCoolingDegreeDays'
  | 'energy'
  | 'length'
  | 'powerDensity'
  | 'pressure'
  | 'speed'
  | 'volumeFlowRate';

const allMeasures: Record<
  AllMeasures,
  Measure<AllMeasuresSystems, AllMeasuresUnits>
> = {
  area,
  ventilationRate,
  energyConsumptionPerArea,
  heatingCoolingDegreeDays,
  energy,
  length,
  powerDensity,
  pressure,
  speed,
  volumeFlowRate,
};

export default allMeasures;
