const path = require('path') // eslint-disable-line

exports.onCreateWebpackConfig = function ({ actions }) {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@theme': path.resolve(__dirname, 'src/theme')
      }
    }
  })
}
