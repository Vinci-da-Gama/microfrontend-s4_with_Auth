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

const commWpConfig = (port, mode = 'development') => !!port && mode === 'development' ? ({
  ...basiWpkConfig,
  mode,
  devServer: {
    port,
    historyApiFallback: {
      index: 'index.html'
    }
  }
}) : ({
  ...basiWpkConfig,
  mode,
  output: {
    filename: '[name].[contenthash].js'
  }
})

module.exports = commWpConfig
