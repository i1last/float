const { task, src, dest, series, watch, parallel } = require('gulp');
const browserSync = require('browser-sync').create();
const nunjucksRender = require('gulp-nunjucks-render');
const sass = require('gulp-sass')(require('sass'));
const cleanCss = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const sassBulkImporter = require('gulp-sass-bulk-importer');
const sourcemaps = require('gulp-sourcemaps');
const uglifyEs = require('gulp-uglify-es').default;
const babel = require('gulp-babel');
const htmlmin = require('gulp-htmlmin');
const webp = require('gulp-webp');

function rastrCompile() {
  return src('app/assets/database/images/**/*.+(png|jpg|jpeg|gif|svg|ico)')
    .pipe(webp())
    .pipe(dest('docs/assets/database/images/'))
    .pipe(browserSync.stream());
}

function jsCompile() {
  return src('app/assets/js/*.js')
    .pipe(uglifyEs())
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(dest('docs/assets/js/'))
    .pipe(browserSync.stream());
}

function scssCompile() {
  return src('app/assets/scss/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sassBulkImporter())
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 8 versions'],
      browsers: [
        'Android >= 4',
        'Chrome >= 20',
        'Firefox >= 24',
        'Explorer >= 11',
        'iOS >= 6',
        'Opera >= 12',
        'Safari >= 6',
      ],
    }))
    .pipe(cleanCss({
      level: 2
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(dest('docs/assets/css/'))
    .pipe(browserSync.stream());
}

function njkCompile() {
  return src('app/pages/**/*.njk')
    .pipe(nunjucksRender({ path: ['app/templates'] }))
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(dest('docs/'))
    .pipe(browserSync.stream());
}

function filesTransfer() {
  return src(['app/pages/**', 'app/database*/**', 'app/assets*/**', '!app/pages/**/*.njk', '!app/assets/scss*/**'])
    .pipe(dest('docs/'))
    .pipe(browserSync.stream());
}

// task('test', series());
task('build', parallel(rastrCompile, scssCompile, jsCompile, njkCompile, filesTransfer));

task('watch', series('build', function () {
  browserSync.init({
    server: {
      baseDir: './docs/',
    },
    notify: false,
    logFileChanges: false
  });

  watch(['app/**/*.scss'], scssCompile);
  watch(['app/**/*.js'], jsCompile);
  watch(['app/**/*.+(njk|html)'], njkCompile);

  watch(['app/**/*', '!app/**/*.+(njk|html|scss|js)', '!pacifier.md'], filesTransfer);
  watch(['pacifier.md'], parallel(rastrCompile, scssCompile, jsCompile, njkCompile, filesTransfer));

  watch(['app/**/*', 'pacifier.md'], browserSync.reload());
}));
