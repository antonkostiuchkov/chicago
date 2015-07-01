var gulp = require('gulp');
var stylus = require('gulp-stylus');
var typographic = require('typographic');
var nib = require('nib');
var lost = require('lost-grid');
var jade = require('gulp-jade');
var browserSync = require('browser-sync');
var reload = browserSync.reload;


gulp.task('styles', function(){
	gulp.src('assets/styles/main.styl')
		.pipe(stylus({
			use: [typographic(), nib(), lost()]
		}))
		.pipe(gulp.dest('assets/styles/'))
		.pipe(reload({
			stream: true
		}));
});


gulp.task('jade', function() {
	gulp.src('./*.jade')
		.pipe(jade({
			pretty: false
		}))
		.pipe(gulp.dest('./'))
		.pipe(reload({
			stream: true
		}));
});


gulp.task('reload', function(){
	browserSync({
		server: {
            baseDir: "./"
        }
    });
});


gulp.task('watch', function(){
	browserSync({
		server: {
            baseDir: "./"
        }
    });

	gulp.watch('**/*.styl', ['styles'])
	gulp.watch('**/*.jade', ['jade']);
});

