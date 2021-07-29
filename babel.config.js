const { compilerOptions: { paths } } = require('./tsconfig.json');

const alias = () => {
  const objPaths = {};

  Object.keys(paths).forEach((keyPath) => {
    const formattedKey = keyPath.substr(0, keyPath.length - 3);
    const value = paths[keyPath][0];
    const formattedValue = value.substr(0, value.length - 3);
    objPaths[formattedKey] = formattedValue;
  });

  return objPaths;
};

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    ['module-resolver', {
      alias: alias(),
    }],
  ],
  ignore: [
    '**/*.spec.ts',
  ],
};
