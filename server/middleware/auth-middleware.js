var jwt = require('jsonwebtoken');
var config = require('../config.js');

const authMiddleware = function(req, res, next) {
    if( req.hasOwnProperty('headers') && req.headers.hasOwnProperty('authorization') ) {
        try {
            req.user = jwt.verify(req.headers['authorization'], config.JWT_SECRET);
        } catch(err) {

            return res.status(401).json({
                error: {
                    msg: 'Failed to authenticate token!'
                }
            });
        }
    } else {

        return res.status(401).json({
            error: {
                msg: 'No token!'
            }
        });
    }
    next();
};


module.exports = authMiddleware ;