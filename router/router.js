/**
 * Created by fw on 29.03.16.
 */
module.exports = function(app){
    app.get('/', function(req, res){
        res.render('index.html');
    });
};