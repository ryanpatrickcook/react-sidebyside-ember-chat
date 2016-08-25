var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    main: './src/scripts/main.js'
  },
  output: {
    filename: './dist/scripts/[name].js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loaders: [
          'react-hot',
          'babel-loader?presets[]=react,presets[]=es2015'
        ]
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!sass')
        // loaders: ["style", "css", "sass"]
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin('dist/styles/style.css', {
      allChunks: true
    })
  ]
}
