const { src, dest, watch, parallel, series } = require("gulp");

const sass = require('gulp-sass');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const del = require('del');
const browserSync = require('browser-sync').create();
const svgSprite = require('gulp-svg-sprite');
const  fileinclude  =  require ( 'gulp-file-include');

function browsersync() {
  browserSync.init({
    server: {
      baseDir: 'app/'
    },
    port: 3000,
    notify: false,
    // tunnel: true
  });
}

function styles() {
  return src('app/sass/style.sass')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(concat('style.min.css'))
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 10 versions'],
      grid: true
    }))
    .pipe(dest('app/css'))
    .pipe(browserSync.stream());
}

function scripts() {
  return src([
    'node_modules/jquery/dist/jquery.js',
    'node_modules/slick-carousel/slick/slick.js',
    'node_modules/mixitup/dist/mixitup.js',
    'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js',
    'node_modules/ion-rangeslider/js/ion.rangeSlider.js',
    'node_modules/rateyo/src/jquery.rateyo.js',
    'app/js/main.js'
  ])
  .pipe(concat('main.min.js'))
  .pipe(uglify())
  .pipe(dest('app/js'))
  .pipe(browserSync.stream());
}

function images() {
  return src('app/img/**/*.*')
    .pipe(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.mozjpeg({quality: 75, progressive: true}),
      imagemin.optipng({optimizationLevel: 5}),
      imagemin.svgo({
        plugins: [
          {removeViewBox: true},
          {cleanupIDs: false}
        ]
      })
    ]))
  .pipe(dest('dist/img'));
}

function build() {
  return src([
    'app/**/*.html',
    'app/css/style.min.css',
    'app/js/main.min.js'
  ], {base: 'app'})
  .pipe(dest('dist'));
}

function cleanDist() {
  return del('dist');
}

function sprite() {
  return src('app/img/icons/**.svg')
    .pipe(svgSprite({
      mode: {
        stack: {
          sprite: "../sprite.svg"
        }
      }
    }))
    .pipe(dest('app/img/icons'));
}

function include() {
  return src('app/html/**.html')
    .pipe(fileinclude({
      prefix: '@@',
    }))
    .pipe(dest('app'));
}

function watching() {
  watch(['app/sass/**/*.sass'], styles);
  watch(['app/js/**/*.js', '!app/js/main.min.js'], scripts);
  watch(['app/**/*.html']).on('change', browserSync.reload);
  watch('app/img/**.svg', sprite);
  watch('app/html/parts/**.html', include);
  watch('app/html/**.html', include);
}

exports.styles = styles;
exports.scripts = scripts;
exports.browsersync = browsersync;
exports.watching = watching;
exports.images = images;
exports.cleanDist = cleanDist;
exports.sprite = sprite;
exports.include = include;

exports.default =  parallel(styles, scripts, include, browsersync, watching);
exports.build = series(cleanDist, images, build);