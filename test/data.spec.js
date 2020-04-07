import { sortData, filterData, averageData } from '../src/data.js';

const data = [
  {
    name: 'Aatrox',
    tags: ['Fighter', 'Tank'],
  },
  {
    name: 'Aatrox',
    tags: ['Fighter', 'Tank'],
  },
  {
    name: 'Zyra',
    tags: ['Mage', 'Support'],
  },
  {
    name: 'Diana',
    tags: ['Fighter', 'Mage'],
  },
];

const firstOrder = [
  {
    name: 'Aatrox',
    tags: ['Fighter', 'Tank'],
  },
  {
    name: 'Aatrox',
    tags: ['Fighter', 'Tank'],
  },
  {
    name: 'Diana',
    tags: ['Fighter', 'Mage'],
  },
  {
    name: 'Zyra',
    tags: ['Mage', 'Support'],
  },
];

const secondOrder = [
  {
    name: 'Zyra',
    tags: ['Mage', 'Support'],
  },
  {
    name: 'Diana',
    tags: ['Fighter', 'Mage'],
  },
  {
    name: 'Aatrox',
    tags: ['Fighter', 'Tank'],
  },
  {
    name: 'Aatrox',
    tags: ['Fighter', 'Tank'],
  },
];

const filterMage = [
  {
    name: 'Zyra',
    tags: ['Mage', 'Support'],
  },
  {
    name: 'Diana',
    tags: ['Fighter', 'Mage'],
  },
];

const DataAverage = [
  {
    tags: ['Fighter', 'Tank'],
    stats: {
      attackdamage: 58.376,
      attackspeedoffset: -0.1,
      crit: 0,
      armor: 26.38,
    },
  },
  {
    tags: ['Support', 'Fighter'],
    stats: {
      attackdamage: 53.04,
      attackspeedoffset: -0.065,
      crit: 0,
      armor: 20.88,
    },
  },
  {
    tags: ['Mage', 'Support'],
    stats: {
      attackdamage: 61.1116,
      attackspeedoffset: 0,
      crit: 0,
      armor: 24.38,
    },
  },
  {
    tags: ['Fighter', 'Mage'],
    stats: {
      attackdamage: 53.384,
      attackspeedoffset: 0.08,
      crit: 0,
      armor: 23.544,
    },
  },
];

const AverageOffensiveStatisticFighter = 78.50633333333333;
// 58.376 +(-0.1) + 26.38 = 84.656 / 3 = 28.2186667
// 53.04 +(-0.065) + 20.88 = 73.855 / 3 = 24.6183333
// 53.384 + 0.08 + 23.544 = 77.008 / 3 = 25.6693333
// 28.2186667 + 24.6183333 + 25.6693333 = 78.50633333333333
// 84.656 + 73.855 + 77.008 = 235.519 / 3 = 78.50633333333333

describe('sortData', () => {
  it('is a function', () => {
    expect(typeof sortData).toBe('function');
  });

  it('return sort champions from AZ', () => {
    expect(sortData(data, 'name', 'ascending')).toEqual(firstOrder);
  });

  it('return sort champions from ZA', () => {
    expect(sortData(data, 'name', 'descending')).toEqual(secondOrder);
  });

  it('return all champions from ZA', () => {
    expect(sortData(data, 'name', 'descending')).toEqual(secondOrder);
  });
});

describe('filterData', () => {
  it('is a function', () => {
    expect(typeof filterData).toBe('function');
  });

  it('return champion filter by role', () => {
    expect(filterData(data, 'Mage')).toEqual(filterMage);
  });
});

describe('averageData', () => {
  it('is a function', () => {
    expect(typeof averageData).toBe('function');
  });

  it('returns the champion average Offensive Statistic for a selected role', () => {
    expect(averageData(DataAverage, 'Fighter')).toEqual(AverageOffensiveStatisticFighter);
  });
});
