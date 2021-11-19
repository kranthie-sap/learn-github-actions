module.exports = {
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    },
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{ts}'],
    coverageDirectory: 'reports/test/unit/coverage',
    testResultsProcessor: 'jest-sonar-reporter',
    setupFilesAfterEnv: ['./jest.setup.js'],
    testMatch: ['**/?(*.)+(test).ts'],
    testPathIgnorePatterns: ['<rootDir>/node_modules/'],
    modulePathIgnorePatterns: ['<rootDir>/dist']
};
