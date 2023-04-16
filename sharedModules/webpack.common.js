const basiWpkConfig = {
  module: {
    rules: [
      {
        test: /\.(m?js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.jsx', '.js', '.mjs'],
  },
}

const commWpConfig = (port, mode = 'development', publicPath='') => !!port && mode === 'development' ? ({
  ...basiWpkConfig,
  mode,
  devtool: 'eval-source-map',
  devServer: {
    port,
    historyApiFallback: true
  }
}) : ({
  ...basiWpkConfig,
  mode,
  output: {
    filename: '[name].[contenthash].js',
    publicPath
  }
})

module.exports = commWpConfig
