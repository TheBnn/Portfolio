"use strict";
//Using pacages
const gulp = require('gulp'),
    sass = require('gulp-sass'),
    sassGlob = require('gulp-sass-glob'),
    csso = require('gulp-csso'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    rigger = require('gulp-rigger'),
    plumber = require('gulp-plumber'),
    browsersync = require('browser-sync').create(),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    cache = require('gulp-cache'),
    htmlmin = require('gulp-html-minifier'),
    sprite = require('gulp-sprite-generator'),
    spritesmith = require('gulp.spritesmith'),
    imagemin = require('gulp-imagemin');

//Prefixes
var autoprefixerList = [
    'Chrome >= 45',
    'Firefox ESR',
    'Edge >= 12',
    'Explorer >= 10',
    'iOS >= 9',
    'Safari >= 9',
    'Android >= 4.4',
    'Opera >= 30'
];

//Paths
var path = {
    src: {
        html: '_src/', //
        js: '_src/js/common.js', //        
        css: '_src/scss/common.scss', //
        img: '_src/img/*.*',
        fonts: '_src/fonts/*.*'
    },
    build: {
        html: '_build/',
        js: '_build/js/',
        css: '_build/css/',
        img: '_build/img/',
        fonts: '_build/fonts/'
    },
    watch: {
        html: ['_src/*.html',
            '_src/_index-bundles/*.html',
            '_src/_calc-bundles/*.html',
            '_src/_calc_custom-bundles/*.html',
            '_src/_inner-bundles/*.html',
            '_src/_order_full-bundles/*.html'
        ], //
        js: '_src/js/*.js', //
        css: ['_src/scss/*.scss', '_src/bootstrap/scss/*.scss'], //
        img: '_src/img/*.*',
        fonts: '_src/fonts/*.*'
    },
    clean: '_build'
};


// //HTML
function genHTML() {
    return gulp.src(path.src.html + '*.html') //Get html bundles     
        .pipe(rigger()) //Generate final html
        // .pipe(htmlmin({collapseWhitespace: true})) //Minify html
        .pipe(gulp.dest(path.build.html)) //Write file to folder
        .pipe(browsersync.stream());
};

//CSS
function genCSS() {
    return gulp.src(path.src.css)
        .pipe(plumber())
        .pipe(sourcemaps.init()) //инициализируем sourcemap
        .pipe(sassGlob())
        .pipe(sass()) // Convert Sass to CSS via gulp-sass
        .pipe(autoprefixer({
            browsers: autoprefixerList
        }))
        .pipe(csso()) // Minify Code
        .pipe(rename({
            suffix: '.min'
        })) //Set name for final file
        .pipe(browsersync.stream())        
        .pipe(sourcemaps.write('./')) //  записываем sourcemap        
        .pipe(gulp.dest(path.build.css)); //Write file to folder
};

// //JS
function genJS() {
    return gulp.src(path.src.js) // получим файл common.js
        .pipe(plumber()) // для отслеживания ошибок
        .pipe(sourcemaps.init()) //инициализируем sourcemap
        .pipe(rigger()) // импортируем все указанные файлы в common.js
        // .pipe(uglify()) // минимизируем js
        // .pipe(rename({
        //     suffix: '.min'
        // }))
        .pipe(sourcemaps.write('./')) //  записываем sourcemap
        .pipe(gulp.dest(path.build.js))
        .pipe(browsersync.stream()); // положим готовый файл
};

//FONTS
function genFONTS() {
    return gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts)) //Write file to folder
};

//IMG
function imgCompress() {
    return gulp.src(path.src.img)
        .pipe(imagemin())
        .pipe(gulp.dest(path.build.img))
};

function genSprites() {
    var spriteData =
        gulp.src(path.src.img) // путь, откуда берем картинки для спрайта
        .pipe(spritesmith({
            imgName: 'sprite.png',
            cssName: 'sprite.css',
            cssFormat: 'css', //можно использовать  css (CSS), sass (SASS), scss (SCSS), scss_maps (SCSS используя map notation), less (LESS), stylus (Stylus) и json (JSON)
            algorithm: 'binary-tree',
            cssVarMap: function (sprite) {
                sprite.name = 's-' + sprite.name
            }
        }));

    return spriteData.css.pipe(gulp.dest(path.build.css)), // путь, куда сохраняем картинку
        spriteData.img.pipe(gulp.dest(path.build.img)); // путь, куда сохраняем стили
};



function watchFiles() {
    gulp.watch(path.watch.css, gulp.series(genCSS));
    gulp.watch(path.watch.js, gulp.series(genJS));
    gulp.watch(path.watch.html, gulp.series(genHTML));
    gulp.watch(path.watch.img, gulp.series(imgCompress));
}

// BrowserSync
function browserSync(done) {
    browsersync.init({
        server: {
            baseDir: "./_build/"
        },
        notify: false,
        port: 3000
    });
    done();
}

// BrowserSync Reload
function browserSyncReload(done) {
    browsersync.reload();
    done();
}



const js = gulp.series(genJS);
const build = gulp.series(genHTML, genCSS, genFONTS, gulp.parallel(watchFiles, browserSync));
const watch = gulp.parallel(watchFiles, browserSync);
// imgCompress, genSprites,genJS

// export tasks
exports.js = js;
exports.build = build;
exports.watch = watch;
exports.default = build;