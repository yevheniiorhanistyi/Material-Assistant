import gulp from 'gulp';
import { path } from './gulp/config/path.js';
import { plugins } from './gulp/config/plugins.js';

import { copy } from './gulp/tasks/copy.js';
import { html } from './gulp/tasks/html.js';
import { server } from './gulp/tasks/server.js';
import { scss } from './gulp/tasks/scss.js';
import { js } from './gulp/tasks/js.js';
import { images } from './gulp/tasks/images.js';
import { svgSpriteTask } from './gulp/tasks/svg-sprive.js';
import { reset } from './gulp/tasks/reset.js';
import { lint } from './gulp/tasks/eslint.js';

global.app = {
  path,
  gulp,
  plugins,
};

function watcher() {
  gulp.watch(path.watch.files, copy);
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.js, gulp.series(js, lint));
  gulp.watch(path.watch.images, images);
}

export default { svgSpriteTask };

const mainTasks = gulp.parallel(copy, html, scss, js, images, reset);

const dev = gulp.series(mainTasks, gulp.parallel(watcher, server));

gulp.task('default', dev);
