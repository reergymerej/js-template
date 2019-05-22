module.exports = {
  verbose: true,
  bail: true,
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  testURL: 'http://localhost',
  watchPathIgnorePatterns: [
    'output',
  ],
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    // 'fixtures/**example.js',
    // '**/use-cases/**.js',
    'src/**.js',
    '!**.test.js',
  ],
  coveragePathIgnorePatterns: [
    'node_modules',
    '__mocks__',
  ]
}
