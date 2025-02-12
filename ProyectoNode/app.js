var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var sobrenosotrosRouter = require('./routes/sobrenosotros');
var inscripcionesRouter = require('./routes/inscripciones');

var academicosRouter = require('./routes/academicos');
var padresRouter = require('./routes/padres');

var estudiantesRouter = require('./routes/estudiantes');
var actividadesRouter = require('./routes/actividades')

var serviciosRouter = require('./routes/servicios')
var contactoRouter = require('./routes/contacto')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/sobrenosotros', sobrenosotrosRouter);
app.use('/inscripciones',inscripcionesRouter);
app.use('/academicos', academicosRouter);
app.use('/padres',padresRouter);
app.use('/estudiantes', estudiantesRouter);
app.use('/actividades',actividadesRouter);
app.use('/servicios',serviciosRouter);
app.use('/contacto', contactoRouter);

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
