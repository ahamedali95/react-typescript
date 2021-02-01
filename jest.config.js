module.exports = {
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.(tsx|ts)?$": "ts-jest",
    "^.+\\.(jsx|jx)?$": "babel-jest"
  },

  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(tsx|ts)?$",
  verbose: true,
  errorOnDeprecated: true,
  moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx"],
  coverageDirectory: "unit-test-coverage",
  setupTestFrameworkScriptFile: "<rootDir>/setupTests.ts"
};