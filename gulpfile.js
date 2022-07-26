import gulp from "gulp";
import ts from "gulp-typescript";
import debug from "gulp-debug";

const tsProject = ts.createProject("tsconfig.json");

gulp.task("default", function () {
  return tsProject.src()
                  .pipe(debug({ showFiles: true }))
                  .pipe(tsProject());
});