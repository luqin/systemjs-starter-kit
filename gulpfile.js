var gulp = require('gulp');
var babel = require('gulp-babel');
var plumber = require('gulp-plumber');
var changed = require('gulp-changed');
var path = require('path');
var del = require('del');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync').create();
var superstatic = require('superstatic');

var es6Path = 'src/**/*.js';
var staticPath = 'public/**/*.*';
var outputPath = 'dist';

// Clean output directory
gulp.task('clean', del.bind(
  null, path.join(outputPath, '**/*.*'), {
    force: true,
    dot: true
  }
));

gulp.task('static', function () {
  return gulp.src(staticPath)
    .pipe(changed(outputPath))
    .pipe(plumber())
    .pipe(gulp.dest(outputPath));
});

gulp.task('static-watch', ['static'], browserSync.reload);

gulp.task('static:watch', function () {
  return gulp.watch(staticPath, ['static-watch']);
});

gulp.task('babel', function () {
  return gulp.src([es6Path])
    .pipe(plumber())
    .pipe(babel())
    .pipe(gulp.dest(path.join(outputPath, 'assets')));
});

gulp.task('babel-watch', ['babel'], browserSync.reload);

gulp.task('babel:watch', function () {
  return gulp.watch(es6Path, ['babel-watch']);
});

gulp.task('build', ['babel', 'static']);

gulp.task('watch', ['build', 'babel:watch', 'static:watch']);

gulp.task('browser-sync', function () {
  process.stdout.write('Starting browserSync and superstatic...\n');
  browserSync.init({
    files: ['index.html', 'dist/**/*.*'],
    // injectChanges: true,
    // logFileChanges: false,
    // logLevel: 'silent',
    logPrefix: 'es6-modules-starter',
    notify: true,
    // reloadDelay: 2000,
    // reloadDebounce: 2000,
    server: {
      baseDir: '.',
      middleware: superstatic({ debug: true })
    }
  });
});

gulp.task('serve', function (done) {
  runSequence('clean', 'watch', 'browser-sync', done);
});

gulp.task('default', ['serve']);
