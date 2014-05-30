/*jshint node:true*/
'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rev = require('gulp-rev');
var sourcemaps = require('gulp-sourcemaps');
var clean = require('gulp-clean');

gulp.task('clean', function() {
  return gulp.src('dist/*', {
    read: false
  }).pipe(clean());
});

gulp.task('default', function() {
  gulp.src('src/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('all.js'))
    .pipe(rev())
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'));
});
