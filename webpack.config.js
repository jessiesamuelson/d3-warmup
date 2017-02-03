const path = require('path');

module.exports = {
  // entry: path.join(__dirname, '/app.js'),
  entry: {
    circle: path.join(__dirname, '/circle.js'),
    rect: path.join(__dirname, '/rect.js'),
  },
  output: {
    path: 'public',
    filename: '[name]-bundle.js',
    libraryTarget: 'var',
    // library: 'D3Circle'
  },
  devtool: 'sourcemaps',
  module: {
    loaders: [
       {
         test: /\.js/,
         loader: 'babel',
         query: { presets: ['es2015'] }
       }
    ]
  },
  devServer: {

  }
};
