import nextJest from 'next/jest.js';
const createJestConfig = nextJest({ dir: './' });

const config = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: { '^@/(.*)$': '<rootDir>/$1' },
  testPathIgnorePatterns: ['/node_modules/', '/tests/e2e/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'components/**/*.{ts,tsx}',
    '!components/**/index.{ts,tsx}',
    '!components/**/*.stories.{ts,tsx}'
  ],
  coverageThreshold: { global: { branches: 75, functions: 80, lines: 80, statements: 80 } }
};

export default createJestConfig(config);
