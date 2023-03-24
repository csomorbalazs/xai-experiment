const gulp = require("gulp");
const rename = require("gulp-rename");
const replace = require("gulp-replace");

gulp.task("default", () => {
  return (
    gulp
      .src("./out/**/*.html", {
        ignore: ["./out/index.html", "./out/404.html"],
      })
      // rename file from "/basic/group-1.html" to "basic-group-1.html"
      .pipe(
        rename((path) => {
          if (path.basename === "random") {
            path.extname = ".jsonhtml";
            return;
          }

          path.dirname = path.dirname.replace("/", "-");
          path.basename = path.dirname + "-" + path.basename;
          path.dirname = "";
          path.extname = ".jsonhtml";
        })
      )
      // NextJS files are served from a different server
      .pipe(replace('"/_next/', '"https://xai-experiment.web.app/_next/'))
      // bringing the html to a JSON friendly format
      .pipe(replace(/>[\r\n ]+</g, "><"))
      .pipe(replace(/\\/g, "\\\\"))
      .pipe(replace(/"/g, '\\"'))
      .pipe(replace(/\t/g, "\\t"))
      .pipe(replace(/\n|\r\n/g, "\\n"))
      .pipe(gulp.dest("./build"))
  );
});
