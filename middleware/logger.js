module.exports = (req, res, next) =>{
    console.log('---------------------New Request----------------------');
    console.log('HTTP operation, of type '+req.method+' to route '+ req.originalUrl);
    console.log('The host of the petition was: '+req.headers.origin);
    console.log('The system that started the petition was:', req.get('User-Agent'));
    next();
};