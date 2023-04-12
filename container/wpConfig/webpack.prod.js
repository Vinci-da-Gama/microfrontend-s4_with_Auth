const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

const commWpConfig = require('../../sharedModules/webpack.common')
const wpkConstants = require('../../sharedModules/wpkConstants')
const packageJson = require('../package.json');

const domain = process.env.PRODUCTION_DOMAIN

const {
  containerFedName,
  marketingFedName,
  remoteEntry,
  publicIndex,
  productionMode
} = wpkConstants

const prodConfig = {
  plugins: [
    new ModuleFederationPlugin({
      name: containerFedName,
      remotes: {
        [marketingFedName]: `${marketingFedName}@${domain}/${marketingFedName}/${remoteEntry}`
      },
      shared: packageJson.dependencies
    }),
    new HtmlWebpackPlugin({
      template: publicIndex
    })
  ]
}

module.exports = merge(commWpConfig(null, productionMode), prodConfig)
