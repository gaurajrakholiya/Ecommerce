const express =  require('express')
const { registerController , loginController , testController, forgotController}  = require('../controllers/authController')
const { requireSignIn, isAdmin } = require("../middlewares/authMiddleware");



const router = express.Router()

//routing
// REGISTER || METHOD 
router.post('/register', registerController)

// LOGIN || METHOD 
router.post('/login', loginController)

// TEST || METHOD 
router.get('/test', requireSignIn , isAdmin  , testController)
// router.get('/test', testController)

//protected route auth
router.get("/user-auth", requireSignIn, (req, res) => {
    res.status(200).send({ ok: true });
  });

//protected route auth
router.get("/admin-auth", requireSignIn , isAdmin, (req, res) => {
    res.status(200).send({ ok: true });
  });

// Forgot password
router.post('/forgot-password' , forgotController)


module.exports = router

