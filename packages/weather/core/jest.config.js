module.exports = {
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    },
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{ts,tsx}'],
    coverageDirectory: 'reports/test/unit/coverage',
    setupFilesAfterEnv: ['./jest.setup.js'],
    testMatch: ['**/?(*.)+(test).ts'],
    testPathIgnorePatterns: ['<rootDir>/node_modules/']
};
