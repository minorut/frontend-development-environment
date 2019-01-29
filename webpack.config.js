const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

/**
 * @param {Object} env
 * @param {boolean} env.development
 * @returns {Object}
 */
module.exports = env => {

  const configs = [
    {
      context: path.join(__dirname, 'src/assets/js'),
      entry: {
        js: ['@babel/polyfill', './index.js']
      },
      output: {
        path: path.join(__dirname, 'public/assets/js'),
        filename: 'bundle.js'
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            enforce: 'pre',
            loader: 'eslint-loader',
          },
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
          },
          {
            test: /\.scss/,
            use: [
              {
                loader: 'sass-loader'
              }
            ],
          },
        ]
      },
      plugins: [
        new CopyWebpackPlugin([
          {
            from: path.join(__dirname, 'src'),
            to: path.join(__dirname, 'public')
          }
        ], {ignore: ['!*.html']})
      ]
    },
    {
      context: path.join(__dirname, 'src/assets/scss'),
      entry: {
        style: './style.scss'
      },
      output: {
        path: path.join(__dirname, 'public/assets/css'),
        filename: '[name].css'
      },
      module: {
        rules: [
          {
            test: /\.scss/,
            use: ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use:
                [
                  {
                    loader: 'css-loader',
                    options: {
                      url: false,
                      sourceMap: true,
                      importLoaders: 2
                    },
                  },
                  {
                    loader: 'sass-loader',
                    options: {
                      sourceMap: true,
                      outputStyle: 'compressed'
                    }
                  }
                ]
            }),
          },
        ],
      },
      plugins: [
        new ExtractTextPlugin('[name].css')
      ]
    }
  ];

  const development = env && env.development;
  const devtool = [
    'cheap-eval-source-map', // js
    'inline-source-map' // css
  ];
  configs.forEach((config, index) => {
    config.mode = development ? 'development' : 'production';
    config.devtool = development ? devtool[index] : false;
  });

  return configs;
};
