/* importar o módulo do framework express */
var express = require('express');

/* importar o módulo do consign */
var consign = require('consign');
 
/* importar o body-parser */
var bodyParser = require('body-parser');

/* importar o módulo do expres-validator */
var expressValidator = require('express-validator');

/* iniciar o objeto do express */
var app = express();

/* setar as variáveis 'view engine' e 'views' do express --- configurar o ejs*/
app.set('view engine', 'ejs');
app.set('views', './app/views');

/* configurar o middleware express.static   */
app.use(express.static('./app/public'));

/* configurar o middlewawe body-parser */ 
app.use(bodyParser.urlencoded({extended: true}));

/* configurar o middleware express-validator */ 
app.use(expressValidator());

/* efetua o autoload das rotas, dos models e dos controllers para o objeto app */
consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(app);

/* exportar o objeto app */
module.exports = app;