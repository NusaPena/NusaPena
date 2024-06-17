const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");
const ImageminWebpackPlugin = require("imagemin-webpack-plugin").default;
const imageminMozjpeg = require("imagemin-mozjpeg");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
	entry: {
		app: path.resolve(__dirname, "src/scripts/index.js"),
	},
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "dist"),
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/,
				use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
			},
		],
	},
	optimization: {
		minimizer: [
			"...",
			new CssMinimizerPlugin(),
		],
		splitChunks: {
			chunks: "all",
			minSize: 20000,
			maxSize: 70000,
			minRemainingSize: 0,
			minChunks: 1,
			maxAsyncRequests: 30,
			maxInitialRequests: 30,
			automaticNameDelimiter: "~",
			enforceSizeThreshold: 50000,
			cacheGroups: {
			defaultVendors: {
				test: /[\\/]node_modules[\\/]/,
				priority: -10,
				reuseExistingChunk: true,
			},
			default: {
				minChunks: 2,
				priority: -20,
				reuseExistingChunk: true,
			},
			},
		},
	},
	plugins: [
		new CleanWebpackPlugin(),

		new HtmlWebpackPlugin({
			filename: "index.html",
			template: path.resolve(__dirname, "src/templates/index.html"),
		}),

		new CopyWebpackPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, "src/public"),
					to: path.resolve(__dirname, "dist"),
					globOptions: {
						ignore: ["**/images**"],
					},
				},
			],
		}),

		new ImageminWebpackPlugin({
			plugins: [
				imageminMozjpeg({
					quality: 70,
					progressive: true,
				}),
			],
		}),

		new MiniCssExtractPlugin(),

		new WorkboxWebpackPlugin.GenerateSW({
			swDest: "./sw.bundle.js",
			runtimeCaching: [
				{
					urlPattern: ({ url }) => url.href.startsWith("https://nusapena-api.vercel.app/list"),
					handler: "StaleWhileRevalidate",
					options: {
						cacheName: "stories-list-nusapena-api",
					},
				},
				{
					urlPattern: ({ url }) => url.href.startsWith("https://nusapena-api.vercel.app/details"),
					handler: "StaleWhileRevalidate",
					options: {
						cacheName: "story-details-nusapena-api",
					},
				},
				{
					urlPattern: ({ url }) => url.href.startsWith("https://nusapena-api.vercel.app/images/"),
					handler: "StaleWhileRevalidate",
					options: {
						cacheName: "story-images-nusapena-api",
					},
				},
				{
					urlPattern: /^https:\/\/fonts\.gstatic\.com/,
					handler: "CacheFirst",
					options: {
						cacheName: "google-fonts-webfonts-source",
					},
				},
				{
					urlPattern: ({ url }) => url.href.startsWith("https://kit.fontawesome.com/c9838309fd.js"),
					handler: "StaleWhileRevalidate",
					options: {
						cacheName: "fontawesome-kit-source",
					},
				},
			],
		}),
	],
};
