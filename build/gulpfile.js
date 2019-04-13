const gulp = require('gulp');
const sass = require('gulp-sass');

const path = {
  'src': {
    'scss': '../src/assets/scss/*/*.scss'
  },
  'dist': {
    'css': '../dist/css/'
  }
};

gulp.task('scss', done => {
  gulp.src(path.src.scss)
    .pipe(sass({
      outputStyle: 'expanded',
    }).on('error', sass.logError))
    .pipe(gulp.dest(path.dist.css));
  done();
});

gulp.task('watch', function () {
  return gulp.watch(path.src.scss, ['scss']);
});

gulp.task('default', ['watch']);
