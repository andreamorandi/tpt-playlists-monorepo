/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const path = require("path");

module.exports = {
  resolver: {
    sourceExts: ['js', 'jsx', 'json', 'ts', 'tsx'],
    extraNodeModules: {
      src: path.resolve(__dirname, 'packages/playlists_mobile'),
    },
  },
  watchFolders: [
    path.resolve(__dirname, '../../node_modules')
  ],
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
};