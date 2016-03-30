/**
 * Created by fw on 29.03.16.
 */
module.exports = function(app){
    app.get('/', function(req, res){
        res.render('index.html');
    });
    app.get('/anfahrt', function(req, res){
        res.render('anfahrt.html');
    });
    app.get('/bewerbung', function(req, res){
        res.render('bewerbung.html');
    });
    app.get('/bachelor', function(req, res){
        res.render('bachelor.html');
    });
};