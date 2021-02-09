// eslint-disable-next-line @typescript-eslint/no-var-requires
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

// https://stackoverflow.com/questions/44008674/how-to-import-the-electron-ipcrenderer-in-a-react-webpack-2-setup
const webpack = require('webpack');

module.exports = [
  new ForkTsCheckerWebpackPlugin(),
  new webpack.ExternalsPlugin('commonjs', [
    'electron'
  ]),
  new webpack.ExternalsPlugin("commonjs", [
    'leveldown'
  ]),
  // https://github.com/ipfs/js-ipfs/blob/master/examples/browser-webpack/webpack.config.js
  new NodePolyfillPlugin(),
  // Note: stream-browserify has assumption about `Buffer` global in its
  // dependencies causing runtime errors. This is a workaround to provide
  // global `Buffer` until https://github.com/isaacs/core-util-is/issues/29
  // is fixed.
  new webpack.ProvidePlugin({
    Buffer: ['buffer', 'Buffer'],
    process: 'process/browser'
  })
];
