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
import oneOverEnergy, {
  OneOverEnergySystems,
  OneOverEnergyUnits,
} from './oneOverEnergy.js';
import powerDensity, {
  PowerDensitySystems,
  PowerDensityUnits,
} from './powerDensity.js';
import pressure, { PressureSystems, PressureUnits } from './pressure.js';
import specificPowerConsumption, {
  SpecificPowerConsumptionSystems,
  SpecificPowerConsumptionUnits,
} from './specificPowerConsumption.js';
import speed, { SpeedSystems, SpeedUnits } from './speed.js';
import ventilationRate, {
  VentilationRateSystems,
  VentilationRateUnits,
} from './ventilationRate.js';
import volume, { VolumeSystems, VolumeUnits } from './volume.js';
import volumeFlowRate, {
  VolumeFlowRateSystems,
  VolumeFlowRateUnits,
} from './volumeFlowRate.js';

export type AllMeasuresSystems =
  | AreaSystems
  | VolumeSystems
  | VentilationRateSystems
  | EnergyConsumptionPerAreaSystems
  | HeatingCoolingDegreeDaysSystems
  | EnergySystems
  | LengthSystems
  | OneOverEnergySystems
  | SpecificPowerConsumptionSystems
  | PowerDensitySystems
  | PressureSystems
  | SpeedSystems
  | VolumeFlowRateSystems;

export type AllMeasuresUnits =
  | AreaUnits
  | VolumeUnits
  | VentilationRateUnits
  | EnergyConsumptionPerAreaUnits
  | HeatingCoolingDegreeDaysUnits
  | EnergyUnits
  | LengthUnits
  | OneOverEnergyUnits
  | SpecificPowerConsumptionUnits
  | PowerDensityUnits
  | PressureUnits
  | SpeedUnits
  | VolumeFlowRateUnits;

export type AllMeasures =
  | 'area'
  | 'volume'
  | 'ventilationRate'
  | 'energyConsumptionPerArea'
  | 'heatingCoolingDegreeDays'
  | 'energy'
  | 'length'
  | 'oneOverEnergy'
  | 'specificPowerConsumption'
  | 'powerDensity'
  | 'pressure'
  | 'speed'
  | 'volumeFlowRate';

const allMeasures: Record<
  AllMeasures,
  Measure<AllMeasuresSystems, AllMeasuresUnits>
> = {
  area,
  volume,
  ventilationRate,
  energyConsumptionPerArea,
  heatingCoolingDegreeDays,
  specificPowerConsumption,
  energy,
  length,
  oneOverEnergy,
  powerDensity,
  pressure,
  speed,
  volumeFlowRate,
};

export default allMeasures;
