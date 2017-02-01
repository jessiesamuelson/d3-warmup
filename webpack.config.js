const path = require('path');

module.exports = {
  entry: path.join(__dirname, '/app.js'),
  output: {
    path: 'public',
    filename: 'app.bundle.js',
    libraryTarget: 'var',
    library: 'D3APP'
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
