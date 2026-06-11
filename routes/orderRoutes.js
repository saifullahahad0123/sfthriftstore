const express =
require("express");
const {isLoggedIn} = require("../middleware/authMiddleware");
const router =
express.Router();

const {

    checkoutPage,

    placeOrder,

    userOrders,

    deleteOrder



} = require(
    "../controllers/orderController"
);



router.get(
    "/checkout",

    isLoggedIn,

    checkoutPage
);

/* PLACE ORDER */



router.post(
    "/place-order",

    isLoggedIn,

    placeOrder
);





router.get(

    "/",

    isLoggedIn,

    userOrders
);

router.get(

    "/delete/:id",

    deleteOrder
);

module.exports = router;