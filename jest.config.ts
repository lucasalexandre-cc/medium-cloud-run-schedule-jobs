/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*ts'],
  // setupFilesAfterEnv: ['<rootDir>/src/app/config/setup-tests.ts'],
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  roots: ['<rootDir>/src'],
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  testMatch: [
    '<rootDir>/tests/**/*.(test|spec).ts',
    '<rootDir>/src/**/*.(test|spec).ts'
  ],
  moduleDirectories: ['node_modules', '<rootDir>/src']
};
