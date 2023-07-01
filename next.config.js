const withTranspileModules = require('next-transpile-modules')(['intelops-common-ui']);
module.exports = withTranspileModules({
    // Other Next.js configurations...
  
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['next/babel'],
            },
          },
        },
      ],
    },
  }) 