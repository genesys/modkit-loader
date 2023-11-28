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
  transformIgnorePatterns: ['/node_modules/'],
  moduleNameMapper: {
    "^.+\\.tpl$": "<rootDir>/test/mocks/template.ts",
    '^axios$': require.resolve('axios')
    //"axios": "axios/dist/node/axios.cjs"
  },
  setupFiles: [
    "<rootDir>/test/mocks/setup.ts"
  ]
};
