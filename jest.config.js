const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig.json');

module.exports = {
    preset: 'ts-jest',
    collectCoverage: true,
    coverageReporters: ['text', 'lcov'],
    moduleDirectories: ["node_modules", "<rootDir>"],
    moduleFileExtensions: ['js', 'ts', 'tsx'],
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
    testEnvironment: 'jsdom',
    testMatch: ['<rootDir>/src/**/*.test.{ts,tsx}'],
    transform: {
        '\\.tsx?$': ['ts-jest', { tsConfig: '<rootDir>/tsconfig.test.json' }],
    },
};
