module.exports = {
  transform: {
    ".(ts|tsx)": "ts-jest"
  },
  testEnvironment: "jsdom",
  testRegex: "/test/.*\\.spec\\.ts$",
  moduleFileExtensions: [
    "ts",
    "js"
  ],
  coveragePathIgnorePatterns: [
    "/node_modules",
    "/test"
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.ts",
    "!src/**/*.d.ts"
  ],
  moduleNameMapper: {
    "^.+\\.tpl$": "<rootDir>/test/mocks/template.ts"
  },
  setupFiles: [
    "<rootDir>/test/mocks/setup.ts"
  ]
};