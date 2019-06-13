const gulp = require("gulp");
const nearUtils = require("near-shell/gulp-utils");
const webpack = require('webpack-stream');
const path = require('path');
const webpackConfig = require('./webpack.config.js');
const connect = require('gulp-connect');

gulp.task("build:model", callback => {
  nearUtils.generateBindings("model.ts", "../out/model.near.ts", callback);
});

gulp.task("build:bindings", gulp.series("build:model", callback => {
  nearUtils.generateBindings("main.ts", "../out/main.near.ts", callback);
}));

gulp.task("build", gulp.series("build:bindings", callback => {
  nearUtils.compile("../out/main.near.ts", "../out/main.wasm", callback);
}));

gulp.task("webpack", () => {
  return gulp.src('src/main.js')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('dist/'))
    .pipe(connect.reload());
});

gulp.task("serve", (resolve) => {
  connect.server({
    root: 'dist/',
    livereload: true,
    port: 5000
  });
  resolve();
});

gulp.task('watch', (resolve) => {
  gulp.watch(['./dist/*.html'], gulp.series('webpack'));
  gulp.watch(['./src/*'], gulp.series('webpack'));
  gulp.watch(['./src/frontend/*'], gulp.series('webpack'));
  resolve();
});

gulp.task("run", gulp.parallel("serve", "watch"));

gulp.task("default", gulp.series("build", "webpack"));

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