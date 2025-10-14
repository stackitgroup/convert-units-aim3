import configureMeasurements, { Measure, Unit } from '..';

test('.toBest before .from throws', () => {
  const convert = configureMeasurements({});
  expect(() => {
    convert(4).toBest();
  }).toThrow();
});

test('.describe throws is unit abbr is not found', () => {
  const convert = configureMeasurements({});
  expect(() => {
    convert().describe('no-a-unit');
  }).toThrow();
});

test('Missing anchors should throw an error', () => {
  type TestUnits = TestAUnits | TestBUnits;
  type TestSystems = 'A' | 'B';

  type TestAUnits = 'a';
  type TestBUnits = 'b';

  const A: Record<TestAUnits, Unit> = {
    a: {
      name: {
        singular: 'a',
        plural: 'as',
      },
      to_anchor: 1,
    },
  };

  const B: Record<TestBUnits, Unit> = {
    b: {
      name: {
        singular: 'b',
        plural: 'bs',
      },
      to_anchor: 1,
    },
  };

  const measures: Measure<TestSystems, TestUnits> = {
    systems: {
      A,
      B,
    },
  };

  const convert = configureMeasurements<'AB', TestSystems, TestUnits>({
    AB: measures,
  });

  expect(() => {
    convert().from('a').to('b');
  }).toThrow();
});

test('Missing system to system anchor should throw an error', () => {
  type TestUnits = TestAUnits | TestBUnits | TestCUnits;
  type TestSystems = 'A' | 'B' | 'C';

  type TestAUnits = 'a';
  type TestBUnits = 'b';
  type TestCUnits = 'c';

  const A: Record<TestAUnits, Unit> = {
    a: {
      name: {
        singular: 'a',
        plural: 'as',
      },
      to_anchor: 1,
    },
  };

  const B: Record<TestBUnits, Unit> = {
    b: {
      name: {
        singular: 'b',
        plural: 'bs',
      },
      to_anchor: 1,
    },
  };

  const C: Record<TestCUnits, Unit> = {
    c: {
      name: {
        singular: 'a',
        plural: 'as',
      },
      to_anchor: 1,
    },
  };

  const measures: Measure<TestSystems, TestUnits> = {
    systems: {
      A,
      B,
      C,
    },
    anchors: {
      // Missing A -> C anchor!
      A: {
        B: {
          ratio: 2,
        },
      },
    },
  };

  const convert = configureMeasurements<'AB', TestSystems, TestUnits>({
    AB: measures,
  });

  expect(() => {
    convert().from('a').to('c');
  }).toThrow();
});

test('Missing origin anchor should throw an error', () => {
  type TestUnits = TestAUnits | TestBUnits | TestCUnits;
  type TestSystems = 'A' | 'B' | 'C';

  type TestAUnits = 'a';
  type TestBUnits = 'b';
  type TestCUnits = 'c';

  const A: Record<TestAUnits, Unit> = {
    a: {
      name: {
        singular: 'a',
        plural: 'as',
      },
      to_anchor: 1,
    },
  };

  const B: Record<TestBUnits, Unit> = {
    b: {
      name: {
        singular: 'b',
        plural: 'bs',
      },
      to_anchor: 1,
    },
  };

  const C: Record<TestCUnits, Unit> = {
    c: {
      name: {
        singular: 'a',
        plural: 'as',
      },
      to_anchor: 1,
    },
  };

  const measures: Measure<TestSystems, TestUnits> = {
    systems: {
      A,
      B,
      C,
    },
    anchors: {
      // missing A anchor
      B: {
        // unit b -> unit a
        A: {
          ratio: 1 / 2,
        },
        // unit b -> unit c
        C: {
          ratio: 3 / 2,
        },
      },
      C: {
        // unit c -> unit a
        A: {
          ratio: 1 / 3,
        },
        // unit c -> unit b
        B: {
          ratio: 2 / 3,
        },
      },
    },
  };

  const convert = configureMeasurements<'AB', TestSystems, TestUnits>({
    AB: measures,
  });

  expect(() => {
    convert().from('a').to('c');
  }).toThrow();
});
