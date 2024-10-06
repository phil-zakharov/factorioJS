import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

export default function () {
  return {
    mode: 'development',
    entry: './src/index.ts',
    devServer: {
      static: './dist',
      open: true,
      hot: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Development',
      }),
    ],
    module: {
      rules: [
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: true,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [
                    [
                      'postcss-preset-env',
                      {
                        // Options
                      },
                    ],
                  ],
                },
              },
            },
          ],
          include: path.resolve(import.meta.dirname, 'src'),
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
          include: path.resolve(import.meta.dirname, 'src'),
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
          include: path.resolve(import.meta.dirname, 'src'),
        },
        {
          test: /\.tsx?$/,
          use: [
            {
              loader: 'ts-loader',
              options: {
                transpileOnly: true,
              },
            },
          ],
          exclude: /node_modules/,
          include: path.resolve(import.meta.dirname, 'src'),
        },
      ],
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(import.meta.dirname, 'dist'),
      clean: true,
    },
    devtool: 'source-map',
    optimization: {
      runtimeChunk: 'single',
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
  }
}
