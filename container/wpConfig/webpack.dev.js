const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

const commWpConfig = require('../../sharedModules/webpack.common')
const wpkConstants = require('../../sharedModules/wpkConstants')
const packageJson = require('../package.json');

const {
  containerFedName,
  marketingFedName,
  port8081,
  remoteEntry,
  publicIndex
} = wpkConstants


const devConfig = {
  plugins: [
    new ModuleFederationPlugin({
      name: containerFedName,
      remotes: {
        [marketingFedName]: `${marketingFedName}@http://localhost:${port8081}/${remoteEntry}`
      },
      shared: packageJson.dependencies
    }),
    new HtmlWebpackPlugin({
      template: publicIndex
    })
  ]
}

module.exports = merge(commWpConfig(wpkConstants.port8080), devConfig)
