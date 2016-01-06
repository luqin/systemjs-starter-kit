var babel = require('gulp-babel');
var browserSync = require('browser-sync');
var gulp = require('gulp');
var superstatic = require('superstatic');

var es6Path = 'src/**/*.js';
var staticPath = 'static/**/*.*';
var compilePath = 'dist';

gulp.task('static', function () {
    return gulp.src(staticPath)
        .pipe(gulp.dest(compilePath));
});

gulp.task('static:watch', function () {
    return gulp.watch(staticPath, ['static']);
});

gulp.task('babel', function () {
    return gulp.src([es6Path])
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
        files: ['index.html', '**/*.js'],
        injectChanges: true,
        logFileChanges: false,
        logLevel: 'silent',
        logPrefix: 'es6-modules-starter',
        notify: true,
        reloadDelay: 0,
        server: {
            baseDir: '.',
            middleware: superstatic({ debug: false })
        }
    });
});

gulp.task('default', ['babel', 'watch']);
