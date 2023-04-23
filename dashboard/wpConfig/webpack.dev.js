const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const { VueLoaderPlugin } = require('vue-loader');

const wpkConstants = require('../../sharedModules/wpkConstants')
const commWpConfig = require('../../sharedModules/webpack.common')
const packageJsonDeps = require('../package.json').dependencies;

const devConfig = {
  entry: ['./src/index.js'],
  resolve: {
    extensions: ['.js', '.vue']
  },
  plugins: [
    new VueLoaderPlugin(),
    new ModuleFederationPlugin({
      name: wpkConstants.dashboardFedName,
      filename: wpkConstants.remoteEntry,
      exposes: {
        [wpkConstants.dashboardExposesKey]: wpkConstants.srcBoot
      },
      shared: packageJsonDeps
    }),
    new HtmlWebpackPlugin({
      template: wpkConstants.publicIndex
    })
  ]
}

module.exports = merge(commWpConfig(wpkConstants.port8083), devConfig)
