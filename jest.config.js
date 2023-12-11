module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    testMatch: ['<rootDir>/app/components/**/*.(test|spec).(ts|tsx)'],
    moduleNameMapper: { '^@/(.*)$': '<rootDir>/app/$1'},
    globals: {
      'ts-jest': {
        tsconfig: 'tsconfig.test.json',
    },
}
    
  };