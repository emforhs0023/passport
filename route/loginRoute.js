var express = require('express');
var db = require("../db/loginDB");
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
var passport   = require("../services/passport")
var crypto = require("crypto")
var signAuth   = require("../services/signAuth")
var ensureAuth   = require("../services/ensureAuth")
var urlencodedParser = bodyParser.urlencoded({extended : false})
var router = express.Router();

/* GET home page. */
router.get('/', [signAuth], function(req, res, next) {
	var fmsg = req.flash();
	if(fmsg.error){
		feedback = fmsg.error[0]
		res.render('login/index', {feedback: feedback});
	} else {
		res.render('login/index', {feedback: fmsg});
	}
});

router.post("/signin", [urlencodedParser,passport.authenticate('local', {failureRedirect: '/login', failureFlash:true})], function(req, res){
	res.redirect('/main');
})

module.exports = router;
