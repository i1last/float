import gulp from 'gulp';
import njkRender from 'gulp-nunjucks-render';
import replace from 'gulp-replace';
const { task, src, dest, series, watch } = gulp;

function njkCompile() {
  return src('app/pages/**/*.njk')
    .pipe(njkRender({ path: ['app/templates'] }))
    .pipe(dest('docs/'));
}

function serverPath() {
  return src('docs/**/*')
    .pipe(replace('="/', '="/integer/'))
    .pipe(dest('docs/'));
}

function localPath() {
  return src('docs/**/*')
    .pipe(replace('="/integer/', '="/'))
    .pipe(dest('docs/'));
}

function filesTransfer() {
  return src(['app/pages/**', 'app/assets*/**', '!app/pages/**/*.njk']).pipe(
    dest('docs/'),
  );
}

function test() {
  return 0;
}

task('test', series(test));
task('build', series(njkCompile, filesTransfer, localPath));
task('buildEX', series(njkCompile, filesTransfer, serverPath));

task('watch', function () {
  watch(['app/**/*'], series(njkCompile, filesTransfer));
});
