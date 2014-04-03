var gulp = require('gulp');
var browserify = require('gulp-browserify');

// Basic usage
gulp.task('scripts', function() {
    // Single entry point to browserify
    gulp.src([
				'./bower_components/jquery/dist/jquery.min.js'
			])
        .pipe(gulp.dest('./public/build/javascripts'))
    gulp.src('./public/javascripts/index.js')
        .pipe(browserify({
          shim: {
            jQuery: {
                path: './bower_components/jquery/dist/jquery.min.js',
                exports: '$'
            }
          }
        }))
        .pipe(gulp.dest('./public/build/javascripts'))
});

gulp.task('default', ['scripts']);
