const express=require("express");
const { AdminRegister, AdminLogin, ShowDetail, UpdateAdmin, passwordChange } = require("../Controllers/AdminController");
const isLoggedIn = require("../Middleware/isLogedIn");
const { addServices, showServices, updateService, showService } = require("../Controllers/ServicesController");
const { addAppoinment, showAppoinment, statusUpdate, appointmentDelete } = require("../Controllers/AppoinmentController");
const { Dashboard, CustomerShow } = require("../Controllers/DashboardController");
const {ImageUpload, ShowGallery, DeleteImage}=require("../Controllers/GalleryController")
const upload = require("../Middleware/upload");
console.log("isLoggedIn:", typeof isLoggedIn);
console.log("passwordChange:", typeof passwordChange);
const router=express.Router();
const clientRouter=express.Router();
router.post("/registration",AdminRegister);
router.post("/login", AdminLogin);
router.post("/add-service",addServices);
clientRouter.get("/show-services",showServices);
clientRouter.post("/add-appoinment",addAppoinment);
router.get("/show-appoinment",showAppoinment);
router.patch("/status-update/:id",statusUpdate);
router.delete("/delete-appoinment/:id",appointmentDelete);
router.get("/dashboard",Dashboard);
router.put("/update-service/:id",updateService)
router.get("/show-services",showServices);
router.get("/show-service/:id",showService);
router.get("/show-customer",CustomerShow);
router.get("/show-details",ShowDetail);
router.put("/update-details",isLoggedIn,UpdateAdmin);
router.put("/update-password",isLoggedIn,passwordChange);
router.post("/image-upload",isLoggedIn,upload.single("image"),ImageUpload)
router.get("/show-images",isLoggedIn,ShowGallery);
clientRouter.get("/show-image",ShowGallery);
router.delete("/delete-image/:id",DeleteImage);
module.exports={router,clientRouter};