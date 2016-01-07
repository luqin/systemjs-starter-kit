var gulp = require('gulp');
var babel = require('gulp-babel');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync');
var superstatic = require('superstatic');

var es6Path = 'src/**/*.js';
var staticPath = 'static/**/*.*';
var compilePath = 'dist';

gulp.task('static', function () {
    return gulp.src(staticPath)
        .pipe(plumber())
        .pipe(gulp.dest(compilePath));
});

gulp.task('static:watch', function () {
    return gulp.watch(staticPath, ['static']);
});

gulp.task('babel', function () {
    return gulp.src([es6Path])
        .pipe(plumber())
        .pipe(babel())
        .pipe(gulp.dest(compilePath));
});

gulp.task('babel:watch', function () {
    return gulp.watch(es6Path, ['babel']);
});

gulp.task('build', ['babel', 'static']);

gulp.task('watch', ['build', 'babel:watch', 'static:watch']);

gulp.task('serve', ['watch'], function () {
    process.stdout.write('Starting browserSync and superstatic...\n');
    browserSync({
        port: 3000,
        files: ['index.html', 'dist/**/*.js'],
        injectChanges: true,
        logFileChanges: false,
        logLevel: 'silent',
        logPrefix: 'es6-modules-starter',
        notify: true,
        reloadDelay: 0,
        server: {
            baseDir: '.',
            middleware: superstatic({ debug: true })
        }
    });
});

gulp.task('default', ['babel', 'watch']);
