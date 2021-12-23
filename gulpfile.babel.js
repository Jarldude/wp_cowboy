import gulp from 'gulp';
import yargs from 'yargs';
import dartSass from 'sass'
import gulpSass from 'gulp-sass'
import cleanCSS from 'gulp-clean-css';
import gulpif from 'gulp-if';
import sourcemaps from 'gulp-sourcemaps';
import del from 'del';
import gulpWebpack from 'webpack-stream';

const sass = gulpSass(dartSass)
import imagemin from 'gulp-imagemin';

const PRODUCTION = yargs.argv.prod;

const paths = {
    styles: {
        src:['src/assets/scss/bundle.scss', 'src/assets/scss/admin.scss'],
        dest:'dist/assets/css'
    },
    images:{
        src:'src/assets/images/**/*.{jpg,jpeg,png,svg,gif}',
        dest:'dist/assets/images'
    },
    scripts:{
        src:'src/assets/js/bundle.js',
        dest:'dist/assets/js'
    },
    other:{
        src:['src/assets/**/*', '!src/assets/{images, js, scss}', '!src/assets/{images, js, scss}/**/*'],
        dest:'dist/assets'
    }
}

export const cowboy = (done) => {
    console.log('Cowboy yeehaa!!!');
    console.log(PRODUCTION);
    done();
}
  
export const styles = () => {
    return gulp.src(paths.styles.src)

    .pipe(gulpif(!PRODUCTION,sourcemaps.init()))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulpif(PRODUCTION, cleanCSS({compatibility: 'ie8'})))
    .pipe(gulpif(!PRODUCTION, sourcemaps.write()))
    .pipe(gulp.dest(paths.styles.dest));
}

export const images = () => {
    return gulp.src(paths.images.src)
    .pipe(gulpif(PRODUCTION, imagemin()))
    .pipe(gulp.dest(paths.images.dest))
}

export const copy = () => {
    return gulp.src(paths.other.src)
    .pipe(gulp.dest(paths.other.dest));
}

export const clean = () => {
    return del(['dist']);
}

export const scripts = () =>{
    return gulp.src(paths.scripts.src)
    .pipe(gulpWebpack())
    .pipe(gulp.dest(paths.scripts.dest));
}

export const watch = () => {
    console.log('watching');
    gulp.watch('src/assets/scss/**/*.scss', styles);
    gulp.watch(paths.images.src, images);
    gulp.watch(paths.other.src, copy);
}

export const dev = gulp.series(clean, gulp.parallel(styles, images, copy), watch);
export const build = gulp.series(clean, gulp.parallel(styles, images, copy));
export default dev;


