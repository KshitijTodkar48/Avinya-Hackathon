const express = require("express") ;
const router = express.Router() ;
const userController = require("../controllers/userController") ;
const userAuthentication = require("../middlewares/authmiddleware") ;

router.get('/me', userAuthentication, userController.me) ;
router.post('/login', userController.login) ;
router.post('/signup', userController.signUp) ;

module.exports = router ;