const { port8083 } = require('./wpkConstants')

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

const commWpConfig = (port, mode = 'development', publicPath = '') => !!port && mode === 'development' ? ({
  ...basiWpkConfig,
  mode,
  devtool: 'eval-source-map',
  output: port === port8083 ? {
    filename: '[name].[contenthash].js',
    publicPath: `http://localhost:${port}/`
  } : {
    publicPath: `http://localhost:${port}/`
  },
  devServer: {
    port,
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  },
  module: port === port8083 ? {
    rules: [
      {
        test: /\.(png|jpe?g|gif|woff|svg|eot|ttf)$/i,
        use: [{ loader: 'file-loader' }],
      },
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.scss|\.css$/,
        use: ['vue-style-loader', 'style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      }
    ]
  } : {
    ...basiWpkConfig.module
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
