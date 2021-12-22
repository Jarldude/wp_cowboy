import gulp from 'gulp';
import yargs from 'yargs';
import dartSass from 'sass'
import gulpSass from 'gulp-sass'
import cleanCSS from 'gulp-clean-css';
import gulpif from 'gulp-if';
const sass = gulpSass(dartSass)


const PRODUCTION = yargs.argv.prod;

export const cowboy = (done) => {
    console.log('Cowboy yeehaa!!!');
    console.log(PRODUCTION);
    done();
}
  
export const styles = () => {
    return gulp.src('src/assets/scss/bundle.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulpif(PRODUCTION, cleanCSS({compatibility: 'ie8'})))
    .pipe(gulp.dest('dist/asset/css'));
}