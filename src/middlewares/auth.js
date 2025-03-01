const adminauth = (req, res, next) => {
    console.log('Admin Auth Middleware');
    const token = "asitkumsr";
    if (token === "asitkumsr") {
        next();
    } else {
        res.status(401).send('Unauthorized');
    }
    next();
    
}
const userauth = (req, res, next) => {
    console.log('User Auth Middleware');
    const token = "amitkumsr";
    if (token === "amitkumsr") {
        next();
    } else {
        res.status(401).send('Unauthorized');
    }
    next();
}
module.exports = { adminauth, userauth };