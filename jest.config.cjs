module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy',
    '^@/redux/services/data/dataApi$': '<rootDir>/src/redux/services/data/__mocks__/dataApi.ts',
  },
  testMatch: ['<rootDir>/src/**/__tests__/**/*.{ts,tsx,js,jsx}'],
};
