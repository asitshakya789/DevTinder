const adminauth = (req, res, next) => {
    console.log('This is Admin Auth Middleware');
    const token = "asitkumar";
    if (token === "asitkumar") {
        next();
    } else {
        res.status(401).send('Unauthorized Access');
    }
    next();
    
}
const userauth = (req, res, next) => {
    console.log(' This is User Auth Middleware');
    const token = "amitkumar";
    if (token === "amitkumar") {
        next();
    } else {
        res.status(401).send('Unauthorized Access');
    }
    next();
}
module.exports = { adminauth, userauth };