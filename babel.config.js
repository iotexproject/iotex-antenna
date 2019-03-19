module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current"
        }
      }
    ],
    ["@babel/preset-typescript"]
  ],
  plugins: [],
  ignore: [/node_modules\//g]
};
