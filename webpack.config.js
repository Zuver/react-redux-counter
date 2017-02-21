const javaScriptModuleTemplate = {
  test: /\.jsx?$/,
  exclude: /(node_modules)/,
  query: {
    presets: ['react', 'es2015'],
  },
};

module.exports = {
  entry: [
    'webpack/hot/dev-server',
    './src/index.jsx',
  ],
  output: {
    path: './public',
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  devServer: {
    inline: true,
    contentBase: './public',
    port: 9000,
  },
  module: {
    preLoaders: [
      Object.assign({
        loader: 'eslint',
      }, javaScriptModuleTemplate),
    ],
    loaders: [
      Object.assign({
        loader: 'babel',
      }, javaScriptModuleTemplate),
    ],
  },
};
