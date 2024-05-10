const express =require("express");
const { createAnnousement, getallNotfication, deleteNotficaton } = require("../controller/AnnousementController");
const router = express.Router();


router.post("/",createAnnousement);
router.get("/",getallNotfication);
router.delete("/:notficationid",deleteNotficaton);


module.exports = router;