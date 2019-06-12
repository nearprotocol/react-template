module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  // context: path.resolve(__dirname, "/src"),
  module: {
    rules: [{
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['react-hot-loader/webpack', 'babel-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /config\.js$/,
        use: ['script-loader']
      }
    ]
  },
  output: {
    path: __dirname + '/',
    filename: 'bundle.js'
  }
}