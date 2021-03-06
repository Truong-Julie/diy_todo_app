const path = require('path')

module.exports = {
  // Entry point
  context: __dirname,
  entry: './client/app/index.js',
  output: {
    // Name of the file exported
    path: path.join(__dirname, '/client/bundle'),
    publicPath: './client/bundle/',
    filename: 'index.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: false
  },
  devServer: {
    // hot reload
    contentBase: './client',
    inline: true,
    port: 3333
  },
  module: {
    // For the loaders
    loaders: [
      {
        // REGEX for files to run through webpack
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
      }
    ]
  }
};