var express = require('express');
var router = express.Router();
var usuariosModel = require('../../models/usuariosModel');


/* GET home page. */
router.get('/', function(req, res, next) {      //login.hbs
  res.render('admin/login', {
    layout:'admin/layout',

  });
});

router.post('/', async (req, res, next) =>  {
  try {
        var usuario = req.body.usuario;
        var password = req.body.password;

        console.log(req.body);

        var data = await usuariosModel.getUserAndPassword(usuario,password);

         if (data != undefined) {
            req.session.id_usuario = data.id; //1
            req.session.nombre = data.usuario;  //flavia

            res.redirect('/admin/actividades');
         } else {
            res.render('admin/login', {
                layout: 'admin/layout',
                error: true
            });

          };

        } catch(error) {
            console.log(error);

        }
      });

      /* Para destruir variables de sesión */

  router.get('/logout',  function (req,res,next) {
    req.session.destroy();  //destruir id tanto como usuario
    res.render('admin/login', {
    layout: 'admin/layout'
    });
  });

module.exports = router;
