// var gulp = require('gulp');

// function defaultTask(cb) {
//     // place code for your default task here
//     cb();
// }

// gulp.task('cowboy', function(done){
//     console.log('Cowboy yeehaa!!!');
//     done();
// });

// exports.default = defaultTask

import gulp from 'gulp';

export const cowboy = (done) => {
    console.log('Cowboy yeehaa!!!');
    done();
}
  