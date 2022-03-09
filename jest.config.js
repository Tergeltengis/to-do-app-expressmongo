/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  roots: ["tests"],
  moduleFileExtensions: ["js", "ts"],
  testMatch: ["<rootDir>/tests/*.ts"],
  testMatch: ["<rootDir>/tests/routes/*.ts"],

  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};
