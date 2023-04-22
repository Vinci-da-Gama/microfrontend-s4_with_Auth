const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

const commWpConfig = require('../../sharedModules/webpack.common')
const wpkConstants = require('../../sharedModules/wpkConstants')
const packageJsonDeps = require('../package.json').dependencies;

const devConfig = {
  plugins: [
    new ModuleFederationPlugin({
      name: wpkConstants.marketingFedName,
      filename: wpkConstants.remoteEntry,
      exposes: {
        [wpkConstants.marketingExposesKey]: wpkConstants.srcBoot
      },
      shared: {
        ...packageJsonDeps,
        react: {
          singleton: true,
          requiredVersion: packageJsonDeps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: packageJsonDeps["react-dom"],
        }
      }
    }),
    new HtmlWebpackPlugin({
      template: wpkConstants.publicIndex
    })
  ]
}

module.exports = merge(commWpConfig(wpkConstants.port8081), devConfig)
