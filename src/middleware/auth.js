module.exports ={
	isLogged:function(req,res,next){
		// si esta autentificado continua en caso contrario ira a la página de registro
		if(req.isAuthenticated()){
			next();
		}else{
			res.redirect('/auth/signin');
		}
	}
}