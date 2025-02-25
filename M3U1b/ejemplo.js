const moment = require('moment');
moment.locale('es');
console.log('Nací ' + moment('11/01/1963','DD/MM/YYYY').fromNow());