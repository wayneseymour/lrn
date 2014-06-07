/*jshint node:true*/
'use strict';

var gulp = require('gulp');
var clean = require('gulp-clean');
var rev = require('gulp-rev');
//var concat = require('gulp-concat');
var concat = require('gulp-concat-sourcemap');
var uglify = require('gulp-uglify');

gulp.task('clean', function() {
  return gulp.src('dist/*', {
    read: false
  }).pipe(clean());
});

gulp.task('default', function() {
  gulp.src('src/**/*.js')

      .pipe(uglify())
      .pipe(rev())
      .pipe(concat('built.js', {}))

    .pipe(gulp.dest('dist'));
});

