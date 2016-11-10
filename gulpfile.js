const gulp = require("gulp"),
      sass = require("gulp-sass"),
      jade = require("gulp-jade"),
      babel = require("gulp-babel");
      
var ruta = {
    sass : ['accets/sass/*.sass', 'accets/sass/modulos/*.sass'],
    jade : 'accets/jade/*.jade',
    javascript : 'accets/ecma6/*.js'
};


//tarea que compila el archivo sass
gulp.task('sass', ()=>{
    gulp.src(ruta.sass)
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('accets/css/'));
});

gulp.task('jade', ()=>{
    gulp.src(ruta.jade)
    .pipe(jade())
    .pipe(gulp.dest('./'));
});

gulp.task('ecma', ()=>{
    gulp.src(ruta.javascript)
    .pipe(babel({presets: ['es2015']}))
    .pipe(gulp.dest('accets/js'));
});

/*
Tarea por defecto que se ejecuta escribiendo en la terminal
el comando "gulp", y se ejecutaran los cambios
*/
//gulp.task('default',['sass', 'jade']);


/*
Esta tarea ejecuta una tarea por defecto la cual va escuchar
cada cambio producido en cualquiera de las tareas contenedoras
se debe ejecutar el comando "gulp".
*/
gulp.task('default',()=>{
    gulp.watch(ruta.sass,['sass']);
    gulp.watch(ruta.jade,['jade']);
    gulp.watch(ruta.javascript,['ecma']);
})