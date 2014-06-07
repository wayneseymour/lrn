/*jshint node:true*/

'use strict';

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var clean = require('gulp-clean');

gulp.task('compress', function() {
  gulp.src('src/**/*.js')
    .pipe(uglify({ outSourceMap: true }))
    .pipe(gulp.dest('dist'));
});
gulp.task('clean', function() {
 gulp.src('dist', {read: false})
        .pipe(clean());
});
