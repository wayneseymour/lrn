var gulp = require('gulp');
var minifycss = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('css', function () {
	return gulp.src('css/main.css')
		.pipe(autoprefixer('last 15 version'))
		.pipe(minifycss())
		.pipe(gulp.dest('css/min'));
});

gulp.task('default', function() {
	gulp.run('css');


	gulp.watch('css/*.css', function() {
		gulp.run('css');
	});
});
