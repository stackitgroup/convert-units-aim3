import configureMeasurements from '..';

test('Make sure that the first unit tested cannot become the best value if it is less than the cutOffNumber', () => {
  type TestMeasureSystems = 'test';
  type TestMeasureUnits = 'a' | 'al' | 'axl';
  const convert = configureMeasurements<
    'testmeasure',
    TestMeasureSystems,
    TestMeasureUnits
  >({
    testmeasure: {
      systems: {
        test: {
          a: {
            name: {
              singular: 'a',
              plural: 'as',
            },
            to_anchor: 1,
          },
          al: {
            name: {
              singular: 'al',
              plural: 'als',
            },
            to_anchor: 1 / 1000,
          },
          axl: {
            name: {
              singular: 'axl',
              plural: 'axls',
            },
            to_anchor: 1 / 1000000,
          },
        },
      },
    },
  });
  const actual = convert(10).from('al').toBest(),
    expected = {
      val: 10,
      unit: 'al',
      singular: 'al',
      plural: 'als',
    };
  expect(actual).toEqual(expected);
});
