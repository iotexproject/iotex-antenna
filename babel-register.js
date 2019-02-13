require('@babel/register')({
  presets: [
    ['@babel/preset-env', {
      targets: {
        node: 'current',
      },
    }],
    ['@babel/preset-flow'],
  ],
  plugins: [
    '@babel/plugin-transform-flow-strip-types',
    '@babel/plugin-proposal-object-rest-spread',
    'transform-class-properties',
  ],
  ignore: [
    /node_modules\//g,
  ],
});
require('@babel/polyfill');
