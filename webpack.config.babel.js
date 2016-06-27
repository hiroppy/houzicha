const webpack = require('webpack');

module.exports = {
  context: `${__dirname}/src/js`,
  entry: {
    'application': './index.js',
  },
  output: {
    path: `${__dirname}/bundle`,
    filename: 'index.js'
  },
  resolve: {
    modulesDirectories: ['node_modules'],
    alias: {
      easyResponsiveTabs: `${__dirname}/node_modules/easy-responsive-tabs/js/easyResponsiveTabs.js`
    }
  },
  module: {
    loaders: [
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: 'babel',
        query:{
          presets: ['es2015']
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jquery: 'jquery',
      jQuery: 'jquery'
    })
  ]
};
