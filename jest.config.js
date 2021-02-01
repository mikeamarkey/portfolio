const jestConfig = require('@snowpack/app-scripts-react/jest.config.js')()

module.exports = {
  ...jestConfig,
  testMatch: ['<rootDir>/src/tests/*.test.tsx']
}
