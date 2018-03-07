const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

exports.modifyWebpackConfig = ({ config, stage }) => {
  config.merge({
    resolve: {
      alias: {
        '../../theme.config': path.join(__dirname, 'src/semantic/theme.config'),
      },
    },
  });

  return config;
};
