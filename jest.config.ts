// jest.config.ts

export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    // process `*.tsx` files with `ts-jest`
  },
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png)$': 'jest-transform-stub',
    '\\.(css|less)$': 'identity-obj-proxy',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!d3-selection)/'],
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
};
