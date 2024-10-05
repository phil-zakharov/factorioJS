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
    output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "dist"),
      clean: true,
    },
    devtool: "source-map",
    optimization: {
      runtimeChunk: "single",
    },
  };
}
