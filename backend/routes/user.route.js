const { Login, SignUp } = require("../controllers/user.controller")

const router = require("express").Router()


router.post("/login",Login)
router.post("/signup",SignUp)



module.exports = router
