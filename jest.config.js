module.exports = {
    verbose: true,
    collectCoverage: true,
    coverageReporters: ['text', 'lcov'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    moduleFileExtensions: ['ts', 'tsx', 'js'],
};
