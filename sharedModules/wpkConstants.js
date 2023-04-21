const wpkConstants = Object.freeze({
  publicIndex: './public/index.html',
  srcBoot: './src/bootstrap',
  remoteEntry: 'remoteEntry.js',
  port8080: 8080,
  port8081: 8081,
  port8082: 8082,
  port8083: 8083,
  containerFedName: 'container',
  marketingFedName: 'marketing',
  marketingExposesKey: './MarketingMiniApp',
  authFedName: 'auth',
  authExposesKey: './AuthMiniApp',
  productionMode: 'production',
  containerAppPublicPath: '/container/latest/',
  marketingMiniAppPublicPath: 'marketing/latest',
  authMiniAppPublicPath: 'auth/latest'
});

module.exports = wpkConstants;
