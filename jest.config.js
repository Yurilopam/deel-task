module.exports = {
  collectCoverageFrom: [
    'src/**/?*.js'
  ],
  coverageDirectory: 'coverage',
  coverageReporters: [
    'html',
    'text',
    'lcov',
    'clover'
  ],
  moduleNameMapper: {
    '^@src(.*)$': '<rootDir>/src$1'
  },
  modulePathIgnorePatterns: ['<rootDir>/.*/__mocks__'],
  reporters: [
    'default',
    ['jest-sonar', { outputDirectory: './coverage' }],
    ['jest-junit', { suiteName: 'deel task tests', outputDirectory: './coverage/test-reports' }]
  ],
  testEnvironment: 'node',
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[tj]s?(x)'
  ]
}
