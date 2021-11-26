module.exports = {
  exclude: [
    'coverage',
    'self-coverage',
    'test/fixtures/coverage.js',
    'test/build/*',
    'test/src/*',
    'test/nyc.js',
    'test/process-args.js',
    'test/fixtures/_generateCoverage.js',
  ],
  'check-coverage': true,
  branches: 80,
  functions: 80,
  lines: 80,
  statements: 80,
};
