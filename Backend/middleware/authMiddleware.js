const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const authMiddleware = async (req, res, next) => {
    const token = req.header('Authorization');
    if(!token){
        return res.status(401).json({ message : "Access Denied! No Token Provided."});
    }
    try {
        const decoded = jwt.verify(token.replace('Bearer', ''), process.env.JWT_KEY);
        req.user = decoded;
        next();    
    } catch (error) {
        return res.status(500).json({ message : "Invalid Token!"});
    }
}

const adminMiddleware = (req, res, next) => {
    if(req.user.role !== 'admin'){
        return res.status(403).json({ message : "Access Denied! Admins only."});
    }
}

module.exports = { authMiddleware, adminMiddleware};