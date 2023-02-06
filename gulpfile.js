const { src, dest, series } = require('gulp');
const njkRender = require('gulp-nunjucks-render');
const replace = require('gulp-replace');

function localCompil() {
  return src('app/pages/**/*.njk')
    .pipe(njkRender({ path: ['app/templates'] }))
    .pipe(replace('="/integer/', '="/'))
    .pipe(dest('docs'));
}

function globalCompil() {
  return src('app/pages/**/*.njk')
    .pipe(njkRender({ path: ['app/templates'] }))
    .pipe(replace('="/', '="/integer/'))
    .pipe(dest('docs'));
}

exports.buildEx = series(globalCompil); // for github repo
exports.build = series(localCompil); // for local machine
