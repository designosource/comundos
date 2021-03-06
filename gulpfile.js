var sourceDir = '',
    bowerDir = 'bower_components';

var gulp = require('gulp'),
    sass = require('gulp-sass'), // development & production
    autoprefixer = require('gulp-autoprefixer'), // development & production
    notify = require('gulp-notify'), // development & production
    jshint = require('gulp-jshint'); // dev

/* SASS COMPILING: development */
gulp.task('sass', function () {
    gulp.src('sass/**/*.scss')
        .pipe(sass({
            'outputStyle': 'expanded',
            'sourceComments': true,
            'lineNumbers': true
        }).on('error', function (err) {
            console.error('Sass error: ', err.message);
        }))
        .pipe(autoprefixer({
            browsers: ['last 3 versions']
        }))
        .pipe(gulp.dest('css'))
        .pipe(notify({message: 'Styles task complete'}));
});

/* Watch for changes | Executes sass and jshint */
gulp.task('watch', function () {

    // Watch for sass changes
    gulp.watch('sass/**/*.scss', ['sass']);
});

gulp.task('dev', ['watch']);
