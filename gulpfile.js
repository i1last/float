import gulp from 'gulp';
const { task, src, dest, series, watch, parallel } = gulp;
import browserSync from 'browser-sync';
import nunjucksRender from 'gulp-nunjucks-render';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);
import cleanCss from 'gulp-clean-css';
import autoprefixer from 'gulp-autoprefixer';
import sassBulkImporter from 'gulp-sass-bulk-importer';
import sourcemaps from 'gulp-sourcemaps';
import gulpUglifyEs from 'gulp-uglify-es';
const uglifyEs = gulpUglifyEs.default;
import babel from 'gulp-babel';
import htmlmin from 'gulp-htmlmin';
import imagemin from 'gulp-imagemin';
import imageminGifsicle from 'imagemin-gifsicle';
import imageminOptipng from 'imagemin-optipng';
import recompress from 'imagemin-jpeg-recompress';
import pngquant from 'imagemin-pngquant';
import changed from 'gulp-changed';
import svgmin from 'gulp-svgmin';
import multiDest from 'gulp-multi-dest';
import plumber from 'gulp-plumber'

function svgCompile() {
  return src('app/pages/**/*.svg')
    .pipe(changed('docs/'))
    .pipe(changed('app/..SVG/dest/pages'))
    .pipe(svgmin({
      plugins: [
        {
          name: 'preset-default',
        },
        'removeComments',
        'removeEmptyContainers'
      ]
    }))
    .pipe(multiDest(['docs/', 'app/..SVG/dest/pages']))
}

function localSvgCompile() {
  return src('app/..SVG/src/*.svg')
    .pipe(changed('app/..SVG/dest/local'))
    .pipe(svgmin({
      plugins: [
        {
          name: 'preset-default',
        },
        'removeComments',
        'removeEmptyContainers'
      ]
    }))
    .pipe(dest('app/..SVG/dest/local'))
}

function rastrCompile() {
  return src('app/database/images/**/*.*')
    .pipe(changed('docs/database/images/'))
    .pipe(imagemin({interlaced: true, progressive: true, optimizationLevel: 5},
      [
        recompress({
          loops: 6,
          min: 50,
          max: 90,
          quality: 'high',
          use: [pngquant({
            quality: [0.8, 1],
            strip: true,
            speed: 1})],
          }),
        imageminGifsicle(),
        imageminOptipng()
      ]))
    .pipe(plumber())
    .pipe(dest('docs/database/images/'))
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
    .pipe(nunjucksRender({ path: ['app/templates/'] }))
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(dest('docs/'))
    .pipe(browserSync.stream());
}

function filesTransfer() {
  return src(['app/pages/**', 'app/database*/**', 'app/assets*/**', '!app/**/*.+(njk|js|scss)', '!app/assets/scss*/**', '!app/database/images/'])
    .pipe(dest('docs/'))
    .pipe(browserSync.stream());
}

task('localSvgCompile', series(localSvgCompile));
task('test', () => {console.log('test passed');});
task('build', series(svgCompile, rastrCompile, scssCompile, jsCompile, njkCompile, filesTransfer));

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
  watch(['pacifier.md'], task('build'));

  watch(['app/**/*', 'pacifier.md'], browserSync.reload());
}));
