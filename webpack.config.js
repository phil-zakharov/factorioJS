import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default function () {
  return {
    mode: "development",
    entry: "./src/index.ts",
    devServer: {
      static: "./dist",
      open: true,
      hot: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: "Development",
      }),
    ],
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    output: {
      filename: "[name].bundle.js",
      path: path.resolve(import.meta.dirname, "dist"),
      clean: true,
    },
    devtool: "source-map",
    optimization: {
      runtimeChunk: "single",
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
  };
}
