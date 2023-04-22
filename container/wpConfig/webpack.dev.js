const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

const commWpConfig = require('../../sharedModules/webpack.common')
const wpkConstants = require('../../sharedModules/wpkConstants')
const packageJsonDeps = require('../package.json').dependencies;

const {
  port8080,
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

module.exports = merge(commWpConfig(port8080), devConfig)
