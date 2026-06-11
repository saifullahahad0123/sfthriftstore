const express =
require("express");

const router =
express.Router();

const multer =
require("multer");

const cloudinary =
require("../config/cloudinary");

const {
CloudinaryStorage
} = require(
"multer-storage-cloudinary"
);

const {

    addProduct,

    getProducts,

    deleteProduct,

    editProductPage,

    updateProduct

} = require(
"../controllers/productController"
);

/* STORAGE */

const storage =
new CloudinaryStorage({

    cloudinary,

    params: {

        folder:
        "thrift-shop",

        allowed_formats: [

            "jpg",

            "jpeg",

            "png"
        ]
    }
});

const upload =
multer({

    storage
});

/* ROUTES */

router.post(

    "/add",

    upload.single("image"),

    addProduct
);

router.get(

    "/",

    getProducts
);

/* DELETE */

router.get(

    "/delete/:id",

    deleteProduct
);

/* EDIT PAGE */

router.get(

    "/edit/:id",

    editProductPage
);

/* UPDATE */

router.post(

    "/update/:id",

    upload.single("image"),

    updateProduct
);

module.exports =
router;