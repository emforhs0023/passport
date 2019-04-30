var express = require('express');
// var db = require("../db/loginDB");
// var bodyParser = require("body-parser");
// var jsonParser = bodyParser.json();
// var passport   = require("../services/passport")
// var signAuth   = require("../services/signAuth")
// var ensureAuth   = require("../services/ensureAuth")
// var urlencodedParser = bodyParser.urlencoded({extended : false})
var router = express.Router();

/* GET home page. */

router.get('/',  function(req, res, next) {
	res.render('main/index', { layout: false });
	
});

module.exports = router;
