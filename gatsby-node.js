exports.onCreateWebpackConfig = ({ getConfig, stage, actions, loaders }) => {
  const config = getConfig()
  if (stage.startsWith('develop') && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-dom': '@hot-loader/react-dom'
    }
  }

  if (stage === 'develop') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-hot-loader/,
            use: [
              loaders.js()
            ]
          }
        ]
      }
    })
  }
}
