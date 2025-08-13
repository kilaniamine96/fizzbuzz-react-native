module.exports = {
  preset: 'react-native',
  moduleNameMapper: {
    '^@app/(.*)$': '<rootDir>/src/app/$1',
    '^@fizzbuzz/(.*)$': '<rootDir>/src/features/fizzbuzz/$1',
    '^@reverse_string/(.*)$': '<rootDir>/src/features/reverse_string/$1',
  }
};
