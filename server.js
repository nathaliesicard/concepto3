var koa = require('koa');
var logger = require('koa-logger');
var serve = require('koa-better-static');
var Router = require('koa-router');
var nunjucks = require('koa-nunjucks-render');
var bodyParser = require('koa-bodyparser');




var app = koa();

app.use(logger());

app.use(serve('public'));

app.use(nunjucks('views', {
  ext: '.html',
  noCache: process.env.NODE_ENV !== 'production',
  throwOnUndefined: true,
  filters: {
    json: function(str) {
      return JSON.stringify(str, null, 2);
    }
  }
}));



var router = new Router();

var paths = {
  '/': 'index',
  '/error': 'error',
  '/servicios': 'servicios',
  '/nosotros': 'nosotros',
  '/privacidad': 'privacidad',
  '/terminos': 'terminos',
  '/corporativos': 'corporativos',
  '/culturales': 'culturales',
  '/expos': 'expos',
  '/deportivos': 'deportivos',
  '/galeria': 'galeria',
  '/sociales': 'sociales'
};

Object.keys(paths).forEach(function(path) {
  router.get(path, function*() {
    yield this.render(paths[path]);
  });
});

app.use(router.routes());


app.use(function*() {

  this.status = 404;
  this.body = 'Page not found';

});


var port = process.env.PORT || 2500;


app.listen(port, function() {
  console.log('Great success! Listening on port ', port);
});

