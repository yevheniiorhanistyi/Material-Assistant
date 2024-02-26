import eslint from 'gulp-eslint';
import browserSync from 'browser-sync';

export const lint = () => app.gulp.src([`**/*.js`, '!node_modules/**', '!gulp/**'])
  .pipe(eslint({
    configFile: 'eslintrc.js',
  }))
  .pipe(eslint.format())
  .pipe(eslint.failOnError());