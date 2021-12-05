module.exports = {
  coverageDirectory: '<rootDir>/public/tests/',
  globals: {
    __PATH_PREFIX__: '',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  modulePaths: ['<rootDir>/src/'],
  setupFiles: [`<rootDir>/jest.loadershim.js`],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: [`node_modules`, `\\.cache`, `<rootDir>.*/public`],
  testURL: `http://localhost`,
  transform: {
    "^.+\\.[jt]sx?$": "<rootDir>/jest.preprocess.js",
  },
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
}
