// path
var path = require('path')
// webpack
var webpack = require('webpack')

// html plugin class
const HtmlWebpackPlugin = require('html-webpack-plugin')

// html plugin instance
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  // client has template
  template: './client/index.html',
  // out is index html
  filename: 'index.html',
  // inject body
  inject: 'body'
})

module.exports = {
  // Input
  entry: './client/index.js',
  // Output
  output: {
    path: path.resolve(__dirname, './dist'),
    //publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this necessary.
            'scss': 'vue-style-loader!css-loader!sass-loader',
            'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
          }
          // other vue-loader options go here
        }
      },
      {
        // babel
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        // img
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },

  // plugin for array, module for obj
  plugins: [
    HtmlWebpackPluginConfig
  ],

  resolve: {
    // es module == esm
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },

  devServer: {
    // History api
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },

  performance: {
    // no hint
    hints: false
  },

  // source map
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    // env
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    // mini js
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    // other mini
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
