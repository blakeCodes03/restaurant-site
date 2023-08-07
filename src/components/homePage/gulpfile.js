// 'use strict';

// const gulp = require('gulp');
// const sass = require('gulp-sass')(require('sass'));

// function buildStyles() {
//   return gulp.src('./sass/**/*.scss')
//     .pipe(sass().on('error', sass.logError))
//     .pipe(gulp.dest('./css'));
// };

// exports.buildStyles = buildStyles;
// exports.watch = function () {
//   gulp.watch('./sass/**/*.scss', ['sass']);
// };
const { src, dest, watch, series} = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
  return src('index.scss')
    .pipe(sass())
    .pipe(dest('css'));
};

function watchTask() {
  watch(['index.scss'], buildStyles)
  
}
exports.default = series(buildStyles, watchTask)

// exports.buildStyles = buildStyles;
// exports.watch = function () {
//   gulp.watch('./sass/**/*.scss', ['sass']);
// };