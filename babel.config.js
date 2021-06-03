const { graphql } = require("graphql");

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@models': './src/models',
        '@env': './src/env',
        '@routes': './src/routes',
        '@controllers': './src/controllers',
        '@graphql': './src/graphql',
        '@db': './src/db',
        '@db-models': '.src/db/models'
      }
    }]
  ],
  ignore: [
    '**/*.spec.ts'
  ]
}