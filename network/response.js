exports.success = function(req,res){
    //console.log('Dentro del success');
    res.send('Primera respuesta success');
}

exports.error = function(req, res, message, status){
    res.status(status || 500).send({
        error: message,
        body:'',
    });
}