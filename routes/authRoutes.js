const express = require("express");

const router = express.Router();

const {

    registerUser,

    loginUser,

    logoutUser,
     verifyOtp

} = require("../controllers/authController");

/* REGISTER */

router.get(
    "/verify-otp",
    (req, res) => {

        res.render("verifyOtp");
    }
);

router.post(
    "/verify-otp",
    verifyOtp
);

router.post(
    "/register",
    registerUser
);

/* LOGIN */

router.post(
    "/login",
    loginUser
);




router.get("/logout", (req, res) => {

    req.session.destroy((error) => {

        if(error){

            console.log(error);
        }

        res.redirect("/login");

    });

});

module.exports = router;