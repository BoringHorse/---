var gulp = require('gulp'),
	browserSync = require('browser-sync').create(),
	concat = require('gulp-concat-css'),
	less = require('gulp-less'),
	minify = require('gulp-clean-css'),
	rename = require('gulp-rename'),
	prefixer = require('gulp-autoprefixer');

gulp.task('server', function() {
	browserSync.init({
		server: {
			baseDir: 'app/'
		},
		notify: false
	});

	gulp.watch('app/less/*.less', ['less']);
	gulp.watch('app/index.html').on('change', browserSync.reload);
});

gulp.task('less', function() {
	console.log('Hello, I have runned!');
	gulp.src('app/less/*.less')
	.pipe(less())
	.pipe(prefixer({
		browsers: ["last 20 version"],
		cascade: true
	}))
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.stream());
});

gulp.task('default', ['server']);