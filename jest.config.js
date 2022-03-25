module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)', '!src/index.tsx'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  testMatch: [
    '<rootDir>/src/**/*.test.(t|j)sx',
    '<rootDir>/src/**/*.test.(t|j)s',
  ],
  moduleNameMapper: {
    '\\.(scss|sass)$': 'identity-obj-proxy',
    '\\.svg': '<rootDir>/__mocks__/svg.js',
  },
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
    '.+\\.(png|jpg|jpeg)$': 'jest-transform-stub',
  },
}
