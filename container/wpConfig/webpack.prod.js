const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

const commWpConfig = require('../../sharedModules/webpack.common')
const wpkConstants = require('../../sharedModules/wpkConstants')
const packageJsonDeps = require('../package.json').dependencies;

const domain = process.env.PRODUCTION_DOMAIN

const {
  containerFedName,
  marketingFedName,
  authFedName,
  dashboardFedName,
  remoteEntry,
  publicIndex,
  productionMode,
  containerAppPublicPath,
  marketingMiniAppPublicPath,
  authMiniAppPublicPath,
  dashboardMiniAppPublicPath,
} = wpkConstants

const prodConfig = {
  plugins: [
    new ModuleFederationPlugin({
      name: containerFedName,
      remotes: {
        [marketingFedName]: `${marketingFedName}@${domain}/${marketingMiniAppPublicPath}/${remoteEntry}`,
        [authFedName]: `${authFedName}@${domain}/${authMiniAppPublicPath}/${remoteEntry}`,
        [dashboardFedName]: `${dashboardFedName}@${domain}/${dashboardMiniAppPublicPath}/${remoteEntry}`
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
      template: publicIndex
    })
  ]
}

module.exports = merge(commWpConfig(null, productionMode, containerAppPublicPath), prodConfig)
