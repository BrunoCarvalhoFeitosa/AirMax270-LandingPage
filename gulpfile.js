// Variables
const gulp = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const cssmin = require('gulp-cssmin');
const uglify = require('gulp-uglify');
const stripCssComments = require('gulp-strip-css-comments');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();

// Task to transform PUG in HTML
gulp.task('pug', () => {
    return gulp.src('src/pug/*.pug')
        .pipe(pug())
        .pipe(gulp.dest('dist'));
});

// Task to transform SCSS in CSS
gulp.task('sass', () => {
    return gulp.src('src/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream());
});

// Task to minify CSS
gulp.task('cssmin', () => {
    gulp.src('src/scss/*.scss')
        .pipe(cssmin())
        .pipe(gulp.dest('dist/assets/css'));
});

// Task to transformm ES6, ES7 in Vanilla Javascript
gulp.task('uglifyJS', () => {
    gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

// Task to remove comments of CSS
gulp.task('stripe', () => {
    gulp.src('src/scss/*.scss')
        .pipe(stripCssComments())
        .pipe(gulp.dest('dist/assets/css'))
});

// Task to minify images
gulp.task('imageMin', () => {
    gulp.src('src/assets/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/assets/images'))
        .pipe(imagemin([
            imagemin.gifsicle({ interlaced: true }),
            imagemin.jpegtran({ progressive: true }),
            imagemin.optipng({ optimizationLevel: 5 }),
            imagemin.svgo({
                plugins: [
                    { removeViewBox: true },
                    { cleanupIDs: false }
                ]
            })
        ]))
});

// Task to build SCSS and JS files
gulp.task('serve', ['sass', 'uglifyJS'], () => {
    browserSync.init({
        server: 'dist'
    })
});

// Task to build all file types and reload browser navigator
gulp.task('watch', () => {
    gulp.watch('src/pug/*', ['pug']);
    gulp.watch('src/scss/*', ['sass']);
    gulp.watch('src/js/*', ['uglifyJS']);
    gulp.watch('dist/*.html').on('change', browserSync.reload);
});

// Default task to batch run task by task
gulp.task('default', ['serve', 'pug', 'sass', 'cssmin', 'uglifyJS', 'stripe', 'imageMin', 'watch']);