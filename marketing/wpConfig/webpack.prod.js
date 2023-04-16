const { merge } = require('webpack-merge')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

const commWpConfig = require('../../sharedModules/webpack.common')
const wpkConstants = require('../../sharedModules/wpkConstants')
const packageJson = require('../package.json')

const prodConfig = {
  plugins: [
    new ModuleFederationPlugin({
      name: wpkConstants.marketingFedName,
      filename: wpkConstants.remoteEntry,
      exposes: {
        [wpkConstants.marketingExposesKey]: wpkConstants.srcBoot
      },
      shared: packageJson.dependencies
    })
    // no need HtmlWebpackPlugin, because all child html will goes into container
  ]
}

module.exports = merge(commWpConfig(null, wpkConstants.productionMode, `/${wpkConstants.marketingMiniAppPublicPath}/`), prodConfig)
