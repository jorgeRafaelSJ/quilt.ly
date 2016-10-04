"use strict";

const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const awspublish = require('gulp-awspublish');

/* == SASS == */
gulp.task('style', ()=> {
	return gulp.src('./sass/main.scss')
		.pipe(sass.sync().on('error', sass.logError))
		.pipe(cleanCSS({debug: true},(details) => {
			console.log(`Original Size: ${details.stats.originalSize / 1000} KB ---> Minified Size: ${details.stats.minifiedSize / 1000} KB`);
    }))
		.pipe(gulp.dest('./public/styles'));
});

/* == SASS:WATCH == */
gulp.task('style:watch', ()=> {
  gulp.watch('./sass/*.scss', ['style']);
});

/* == DEV DEPLOYMENT == */
gulp.task('dev-deploy', ()=> {
	
	let publisher = awspublish.create({
	  region: 'us-west-1',
	  params: {
	    Bucket: 'dev-web.oomamiapp.com'
	  }
	});

	return gulp.src(['./views/index.html','./public/scripts/bundle.js','./public/styles/main.css'])
	  .pipe(awspublish.gzip({ ext: '.gz' }))
	  .pipe(publisher.publish()) 
	  .pipe(awspublish.reporter());
});