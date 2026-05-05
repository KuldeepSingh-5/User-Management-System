const express = require("express");
const router = new express.Router();
const controller = require("../Controllers/usersControllers");
const upload = require("../multerconfig/storageConfig")

// routes
router.post("/user/register",upload.single("user_profile"),controller.userpost);
router.get("/user/details",controller.userget);
router.get("/user/:id", controller.singleuserget);
router.put("/user/edit/:id",upload.single("user_profile"),controller.useredit);
router.delete("/user/delete/:id",controller.userdelete);
router.put("/user/status/:id",controller.userstatus);
router.get("/userexport",controller.userExport);

module.exports = router