const gulp = require('gulp');
const sass = require('gulp-sass');
const $ = require("gulp-load-plugins")();
const browserSync = require('browser-sync');

const paths = {
  'src': {
    'scss': '../src/assets/scss/*/*.scss',
    'ejs': ['../src/components/pages/*/*.ejs', '!' + '../src/components/pages/*/_*.ejs']
  },
  'dist': {
    'css': '../dist',
    'html': '../dist'
  }
};

// Compile scss
gulp.task('scss', done => {
  gulp.src(paths.src.scss)
      .pipe(sass({
        outputStyle: 'expanded',
      }).on('error', sass.logError))
      // IE 11 or more, Android 4.4 or more
      // Others are set to give the required vendor prefix in the latest 2 versions
      .pipe($.autoprefixer(['last 2 versions', 'ie >= 11', 'Android >= 4']))
      .pipe(gulp.dest(paths.dist.css));
  done();
});

// Compile .ejs into .html
gulp.task('ejs', done => {
  gulp.src(paths.src.ejs)
      .pipe($.ejs())
      .pipe($.rename({ extname: ".html" }))
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
  gulp.watch(paths.src.ejs,   ['reload', 'ejs']);
  gulp.watch(paths.src.scss,  ['reload', 'scss']);
  done();
});

gulp.task('default', ['watch', 'server']);
gulp.task('build', ['ejs', 'scss']);
