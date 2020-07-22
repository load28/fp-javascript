import { map } from './map';

describe('map', () => {
  interface User {
    id: number;
    name: string;
    food: string[];
  }

  const testCase: User[] = [
    { id: 0, name: '0', food: ['rice'] },
    { id: 1, name: '1', food: ['milk'] }
  ];

  test('basic map', () => {
    const result1 = map<User, number>(testCase, b => b.id);
    expect(result1).toStrictEqual([0, 1]);
  });
});
