const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const CopyWebpackPlugin = require('copy-webpack-plugin');
const isProduction = process.env.NODE_ENV == "production";

const config = {

    entry: "./index.js",

    output: {
        path: path.resolve(__dirname, "dist"),
    },

    devServer: {
        open: true,
        host: "localhost",
        watchFiles: ['src/**/*'] // to detect changes on *all* files inside src directory
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html", // added manually - index.html in the root? eww
        })

        // new CopyWebpackPlugin({
        //     patterns: [{ from: 'src/img', to: 'img' }]
        // }),

    ],

    module: {

        rules: [
            {
                test: /\.s[ac]ss$/i,
                // use: [stylesHandler, "css-loader", "sass-loader"],
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
        ],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = "production";
    } else {
        config.mode = "development";
    }
    return config;
};