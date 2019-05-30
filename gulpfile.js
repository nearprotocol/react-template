const gulp = require("gulp");
const nearUtils = require("near-shell/gulp-utils");
const webpack = require('webpack-stream');

gulp.task("build:model", callback => {
  nearUtils.generateBindings("model.ts", "../out/model.near.ts", callback);
});

gulp.task("build:bindings", ["build:model"], callback => {
  nearUtils.generateBindings("main.ts", "../out/main.near.ts", callback);
});

gulp.task("build", ["build:bindings"], callback => {
  nearUtils.compile("../out/main.near.ts", "../out/main.wasm", callback);
});

gulp.task("webpack", () => {
  return gulp.src('src/main.js')
    .pipe(webpack({
      mode: 'development',
      devtool: 'inline-source-map',
      module: {
        rules: [{
            test: /\.html$/,
            loader: "file?name=[name].[ext]",
          },
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
          },
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
          },
          {
            test: /config\.js$/,
            use: ['script-loader']
          }
        ]
      },
      output: {
        filename: 'bundle.js'
      },
    }))
    .pipe(gulp.dest('dist/'));
});

gulp.task("default", ["build", "webpack"]);

// TODO: Extract all following boilerplate into library

// This task is not required when running the project locally. Its purpose is to set up the
// AssemblyScript compiler when a new project has been loaded in WebAssembly Studio.
gulp.task("project:load", () => {
  const utils = require("@wasm/studio-utils");
  utils.eval(utils.project.getFile("setup.js").getData(), {
    logLn,
    project,
    monaco,
    fileTypeForExtension,
  });
});
