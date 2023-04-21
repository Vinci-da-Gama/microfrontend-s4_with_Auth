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
  output: {
    publicPath: `http://localhost:${port}/`
  },
  devServer: {
    port,
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
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
