const { merge } = require('webpack-merge')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

const commWpConfig = require('../../sharedModules/webpack.common')
const wpkConstants = require('../../sharedModules/wpkConstants')
const packageJsonDeps = require('../package.json').dependencies;

const prodConfig = {
  entry: ['./src/index.js'],
  plugins: [
    new ModuleFederationPlugin({
      name: wpkConstants.dashboardFedName,
      filename: wpkConstants.remoteEntry,
      exposes: {
        [wpkConstants.dashboardExposesKey]: wpkConstants.srcBoot
      },
      shared: packageJsonDeps
    })
    // no need HtmlWebpackPlugin, because all child html will goes into container
  ]
}

module.exports = merge(commWpConfig(null, wpkConstants.productionMode, `/${wpkConstants.dashboardMiniAppPublicPath}/`), prodConfig)
