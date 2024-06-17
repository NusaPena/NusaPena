const { merge } = require("webpack-merge");
const path = require("path");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: path.resolve(__dirname, "dist"),
    open: true,
    port: 9000,
    compress: true,
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  },
  optimization: {
    minimize: true,
  },
  plugins: [
    new BundleAnalyzerPlugin({
			analyzerMode: "static",
			openAnalyzer: false,
		}),
  ],
});
