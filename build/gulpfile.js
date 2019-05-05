const gulp = require('gulp');
const sass = require('gulp-sass');
const $ = require("gulp-load-plugins")();
const browserSync = require('browser-sync');

const paths = {
  'src': {
    'scss'  : '../src/assets/scss/*/*.scss',
    'js'    : '../src/assets/javascripts/*/*.js',
    'ejs'   : ['../src/components/pages/*/*.ejs', '!' + '../src/components/pages/*/_*.ejs'],
    'images': ['../src/assets/images/*/*.svg', '../src/assets/images/*/*.png', '../src/assets/images/*/*.jpg' ]
  },
  'dist': {
    'css'   : '../dist',
    'js'    : '../dist',
    'html'  : '../dist',
    'images': '../dist/images'
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

// Save images
gulp.task('images', done => {
  gulp.src(paths.src.images)
    .pipe(gulp.dest(paths.dist.images));
  done();
});

// Save javascript file
gulp.task('js', done => {
  gulp.src(paths.src.js)
    .pipe(gulp.dest(paths.dist.js));
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
  gulp.watch(paths.src.js,      ['reload', 'js']);
  gulp.watch(paths.src.ejs,     ['reload', 'ejs']);
  gulp.watch(paths.src.scss,    ['reload', 'scss']);
  gulp.watch(paths.src.images,  ['reload', 'images']);
  done();
});

gulp.task('default', ['watch', 'server']);
gulp.task('build', ['ejs', 'js', 'scss', 'images']);
