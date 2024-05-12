const express =require("express");
const { createAnnousement, getallNotfication, deleteNotficaton, createBroatcast } = require("../controller/AnnousementController");
const router = express.Router();


router.post("/",createAnnousement);
router.get("/",getallNotfication);
router.delete("/:notficationid",deleteNotficaton);
router.post("/broadcast",createBroatcast);


module.exports = router;