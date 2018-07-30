var gulp = require('gulp'),
	browserSync = require('browser-sync').create(),
	concat = require('gulp-concat-css'),
	less = require('gulp-less'),
	minify = require('gulp-clean-css'),
	rename = require('gulp-rename'),
	prefixer = require('gulp-autoprefixer'),
	optimize = require('gulp-image-optimize'),
	uglifyy = require('gulp-uglify');

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

gulp.task('optimizeImage', function() {
	return gulp.src('app/img/*')
	.pipe(optimize())
	.pipe(gulp.dest('app/img/'));
})

gulp.task('less', function() {
	console.log('Hello, I have runned!');
	return gulp.src('app/less/*.less')
	.pipe(less())
	.pipe(prefixer({
		browsers: ["last 20 version"],
		cascade: true
	}))
	.pipe(minify())
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.stream());
});

gulp.task('optimizeJS', function() {
	return gulp.src('dist/js/*.js')
			.pipe(uglify())
			.pipe(gulp.dest())
})

gulp.task('default', ['server']);