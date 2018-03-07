const gulp = require('gulp');
const watch = require('semantic-ui/tasks/watch');
const build = require('semantic-ui/tasks/build');

// import task with a custom task name
gulp.task('watch', watch);
gulp.task('build', build);
