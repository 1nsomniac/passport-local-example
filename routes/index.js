
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Home', user: req.user });
};

exports.login = function(req, res){
  res.render('login', { title: 'Login' });
};

