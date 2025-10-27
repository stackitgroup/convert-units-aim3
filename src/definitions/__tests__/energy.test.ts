import configureMeasurements from '../..';
import energy, { EnergySystems, EnergyUnits } from '../energy';

const convert = configureMeasurements<'energy', EnergySystems, EnergyUnits>({
  energy,
});

describe('Energy conversions', () => {
  test('kWh to kWh', () => {
    expect(convert(1).from('kWh').to('kWh')).toBe(1);
  });

  test('MMBtu to MMBtu', () => {
    expect(convert(1).from('MMBtu').to('MMBtu')).toBe(1);
  });

  test('Therms to Therms', () => {
    expect(convert(1).from('Therms').to('Therms')).toBe(1);
  });

  test('Ton-hours to Ton-hours', () => {
    expect(convert(1).from('Ton-hours').to('Ton-hours')).toBe(1);
  });

  test('kWh to MMBtu', () => {
    expect(convert(1).from('kWh').to('MMBtu')).toBeCloseTo(0.003412, 6);
  });

  test('kWh to Therms', () => {
    expect(convert(1).from('kWh').to('Therms')).toBeCloseTo(0.03412, 5);
  });

  test('kWh to Ton-hours', () => {
    expect(convert(1).from('kWh').to('Ton-hours')).toBeCloseTo(0.28433, 5);
  });

  test('MMBtu to kWh', () => {
    expect(convert(1).from('MMBtu').to('kWh')).toBeCloseTo(293.08, 2);
  });

  test('Therms to kWh', () => {
    expect(convert(1).from('Therms').to('kWh')).toBeCloseTo(29.308, 3);
  });

  test('Ton-hours to kWh', () => {
    expect(convert(1).from('Ton-hours').to('kWh')).toBeCloseTo(3.517, 3);
  });

  test('MMBtu to Therms', () => {
    expect(convert(1).from('MMBtu').to('Therms')).toBeCloseTo(10, 1);
  });

  test('Therms to MMBtu', () => {
    expect(convert(1).from('Therms').to('MMBtu')).toBeCloseTo(0.1, 1);
  });

  test('MMBtu to Ton-hours', () => {
    expect(convert(1).from('MMBtu').to('Ton-hours')).toBeCloseTo(83.333, 2);
  });

  test('Ton-hours to MMBtu', () => {
    expect(convert(1).from('Ton-hours').to('MMBtu')).toBeCloseTo(0.012, 3);
  });

  test('Therms to Ton-hours', () => {
    expect(convert(1).from('Therms').to('Ton-hours')).toBeCloseTo(8.333, 3);
  });

  test('Ton-hours to Therms', () => {
    expect(convert(1).from('Ton-hours').to('Therms')).toBeCloseTo(0.12, 2);
  });

  test('100 kWh to MMBtu', () => {
    expect(convert(100).from('kWh').to('MMBtu')).toBeCloseTo(0.3412, 4);
  });

  test('10 MMBtu to kWh', () => {
    expect(convert(10).from('MMBtu').to('kWh')).toBeCloseTo(2930.8, 1);
  });

  test('50 Therms to kWh', () => {
    expect(convert(50).from('Therms').to('kWh')).toBeCloseTo(1465.4, 1);
  });

  test('25 Ton-hours to kWh', () => {
    expect(convert(25).from('Ton-hours').to('kWh')).toBeCloseTo(87.925, 2);
  });

  test('5 MMBtu to Therms', () => {
    expect(convert(5).from('MMBtu').to('Therms')).toBeCloseTo(50, 1);
  });

  test('100 Therms to MMBtu', () => {
    expect(convert(100).from('Therms').to('MMBtu')).toBeCloseTo(10, 1);
  });

  test('10 Ton-hours to MMBtu', () => {
    expect(convert(10).from('Ton-hours').to('MMBtu')).toBeCloseTo(0.12, 2);
  });

  test('0.5 MMBtu to Ton-hours', () => {
    expect(convert(0.5).from('MMBtu').to('Ton-hours')).toBeCloseTo(41.666, 2);
  });

  test('50 Therms to Ton-hours', () => {
    expect(convert(50).from('Therms').to('Ton-hours')).toBeCloseTo(416.65, 1);
  });

  test('200 Ton-hours to Therms', () => {
    expect(convert(200).from('Ton-hours').to('Therms')).toBeCloseTo(24, 1);
  });

  test('290000 Ton-hours to kWh', () => {
    expect(convert(290_000).from('Ton-hours').to('kWh')).toBeCloseTo(
      1019918.7399728
    );
  });

  test('3480.00116 MMBtu to kWh', () => {
    expect(convert(3480.00116).from('MMBtu').to('kWh')).toBeCloseTo(
      1019918.7399728
    );
  });

  test('290000 Ton-hours to MMBtu', () => {
    expect(convert(290_000).from('Ton-hours').to('MMBtu')).toBeCloseTo(
      3480.00116
    );
  });
});
