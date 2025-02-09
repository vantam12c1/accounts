const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./index.js", // File JS chính
  output: {
    filename: "bundle.js", // File JS sau khi build
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/, // Load file CSS vào JS
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(), // Xóa thư mục dist trước khi build
    new HtmlWebpackPlugin({
      template: "./index.html", // Dùng file HTML gốc
      filename: "index.html", // File HTML sau khi build
    }),
  ],
  devServer: {
    static: "./dist", // Thư mục chạy server
    open: true, // Mở trình duyệt tự động
    hot: true, // Reload nhanh khi code thay đổi
  },
  mode: "development", // Chế độ phát triển (dev)
};
