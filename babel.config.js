module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
        alias: {
          '@app': './src/app',
          '@fizzbuzz': './src/features/fizzbuzz',
          '@reverse_string': './src/features/reverse_string',
        }
      }
    ]
  ]
};
