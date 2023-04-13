const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

const commWpConfig = require('../../sharedModules/webpack.common')
const wpkConstants = require('../../sharedModules/wpkConstants')
const packageJson = require('../package.json')

const domain = process.env.PRODUCTION_DOMAIN

const {
  containerFedName,
  marketingFedName,
  remoteEntry,
  publicIndex,
  productionMode,
  containerAppPublicPath,
  marketingMiniAppPublicPath
} = wpkConstants

const prodConfig = {
  output: {
    publicPath: containerAppPublicPath
  },
  plugins: [
    new ModuleFederationPlugin({
      name: containerFedName,
      remotes: {
        [marketingFedName]: `${marketingFedName}@${domain}/${marketingMiniAppPublicPath}/${remoteEntry}`
      },
      shared: packageJson.dependencies
    }),
    new HtmlWebpackPlugin({
      template: publicIndex
    })
  ]
}

module.exports = merge(commWpConfig(null, productionMode), prodConfig)
