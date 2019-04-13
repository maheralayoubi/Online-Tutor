const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');

const paths = {
  'src': {
    'scss': '../src/assets/scss/*/*.scss',
    'html': '../src/components/pages/*/*.html'
  },
  'dist': {
    'css': '../dist',
    'html': '../dist'
  }
};

// Comple scss
gulp.task('scss', done => {
  gulp.src(paths.src.scss)
      .pipe(sass({
        outputStyle: 'expanded',
      }).on('error', sass.logError))
      .pipe(gulp.dest(paths.dist.css));
  done();
});

// Comple html
gulp.task('html', done => {
  gulp.src(paths.src.html)
      .pipe(gulp.dest(paths.dist.html));
  done();
});

// Server start-up
gulp.task('server', function () {
  return browserSync.init({
    server: '../dist'
  });
});

// Browser reload
gulp.task('reload', function () {
  browserSync.reload();
});

gulp.task('watch', done => {
  gulp.watch(paths.src.html, ['html', 'reload']);
  gulp.watch(paths.src.scss, ['reload', 'scss']);
  done();
});

gulp.task('default', ['watch', 'server']);
gulp.task('build', ['html', 'scss']);
