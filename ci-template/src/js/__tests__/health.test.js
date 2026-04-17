import { getHealthStatus } from "../health";

test.each([
  { name: "wizard", health: 90, expected: "healthy" },
  { name: "barbarian", health: 50, expected: "wounded" },
  { name: "archer", health: 35, expected: "wounded" },
  { name: "P.E.K.K.A", health: 14, expected: "critical" },
])(
  `testing color indication for $name, expected status: $expected`,
  ({ name, health, expected }) => {
    const result = getHealthStatus({ name, health });
    expect(result).toBe(expected);
  },
);
