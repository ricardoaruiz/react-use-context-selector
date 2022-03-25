module.exports = {
    testEnvironment: 'jsdom',
    testPathIgnorePatterns: ['/node_modules/', '/.next/'],
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.js(x)'],
    setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
    
    moduleNameMapper: {
      '^.+\\.svg$': 'jest-svg-transformer',
      '\\.(css|scss|sass)$': 'identity-obj-proxy'
    },
    transform: {
      '^.+\\.[jt]sx?$': 'babel-jest'
    },
  }