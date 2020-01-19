let gulp = require('gulp');
let pug = require('gulp-pug');
let sass = require('gulp-sass');
let cssmin = require('gulp-cssmin');
let uglify = require('gulp-uglify');
let stripCssComments = require('gulp-strip-css-comments');
let imagemin = require('gulp-imagemin');
let browserSync = require('browser-sync').create();

//Tarefa para transformar todo .PUG em .HTML e transferir para uma pasta
gulp.task('pug', () => {
    return gulp.src('src/pug/*.pug')
        .pipe(pug())
        .pipe(gulp.dest('dist'));
});

//Tarefa para transformar .SCSS para .CSS
gulp.task('sass', () => {
    return gulp.src('src/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream());
});

gulp.task('cssmin', () => {
    gulp.src('src/scss/*.scss')
        .pipe(cssmin())
        .pipe(gulp.dest('dist/assets/css'));
});

gulp.task('uglifyJS', () => {
    gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('stripe', () => {
    gulp.src('src/scss/*.scss')
        .pipe(stripCssComments())
        .pipe(gulp.dest('dist/assets/css'))
});

//Tarefa para minificar IMAGENS
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

//Tarefa para atualizar a página a cada salvamento
gulp.task('serve', ['sass', 'uglifyJS'], () => {
    browserSync.init({
        server: 'dist'
    })
});

//Tarefa para atualizar a cada save o .PUG em .HTML / .SCSS em .CSS e o .HTML
gulp.task('watch', () => {
    gulp.watch('src/pug/*', ['pug']);
    gulp.watch('src/scss/*', ['sass']);
    gulp.watch('src/js/*', ['uglifyJS']);
    gulp.watch('dist/*.html').on('change', browserSync.reload);
});

//Tarefa para executar cada lote de tarefas
gulp.task('default', ['serve', 'pug', 'sass', 'cssmin', 'uglifyJS', 'stripe', 'imageMin', 'watch']);