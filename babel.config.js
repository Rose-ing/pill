module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    'module:metro-react-native-babel-preset'
  ],
  plugins: [
    'react-native-web',
    'react-native-reanimated/plugin',
    '@babel/plugin-proposal-export-namespace-from',
    ['@babel/plugin-transform-private-methods', { loose: true }],
    ['@babel/plugin-transform-private-property-in-object', { loose: true }],
    ['@babel/plugin-transform-class-properties', { loose: true }]
  ]
}; 