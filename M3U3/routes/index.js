var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index'); //index.hbs
});

router.post('/', async(req,res,next) => {
  var cuit = req.body.cuit;  
  var nombre = req.body.nombre;
  var edad = req.body.edad;
  var email = req.body.email;
  var telefono = req.body.telefono;
  var domicilio = req.body.domicilio;
  var año = req.body.año;
  var division = req.body.division;
  var materia = req.body.materia;
  var año_materia = req.body.año_materia;
  var profesor = req.body.profesor;
  var institucion = req.body.institucion;

  console.log(req.body);

  var obj = {
    to: 'jlcastagno@github.com',
    subject: 'Inscripción desde la web',
    html: nombre + " se inscribió a examen a traves de formulario en página home y quiere fecha y hora en este mail." + email 
    + "<br> Su teléfono es: " + telefono

  } //cierra var obj

  // Looking to send emails in production? Check out our Email API/SMTP product!
var transport = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
}); //cierra var transport

  var info = await transport.sendMail(obj);

  res.render('index' , {
    message: 'Mensaje enviado correctamente',
  });


});

module.exports = router;
