import { sortCharactersByHealth } from "../sort";

test("сортировка по убыванию очков здоровья", () => {
  const input = [
    { name: "мечник", health: 10 },
    { name: "маг", health: 100 },
    { name: "лучник", health: 80 },
  ];

  const expected = [
    { name: "маг", health: 100 },
    { name: "лучник", health: 80 },
    { name: "мечник", health: 10 },
  ];

  const result = sortCharactersByHealth(input);

  expect(result).toStrictEqual(expected);
});
