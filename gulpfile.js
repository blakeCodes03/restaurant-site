'use strict';

const { src, dest, watch, series} = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
  return src('./sass/**/*.scss')
    .pipe(sass())
    .pipe(dest('./src/components/homePage/homePage.css'));
};

function watchTask() {
  watch(['index.scss'], buildStyles)
  
}
exports.default = series(buildStyles, watchTask)

// exports.buildStyles = buildStyles;
// exports.watch = function () {
//   gulp.watch('./sass/**/*.scss', ['sass']);
// };