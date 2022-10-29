const express = require("express");
const controller = require("../controllers/controller");
const adminController = require("../controllers/adminController");
const router = express.Router();

router.get("/", controller.home);
router.get("/pre-analysis", controller.pre_analysis);
router.get("/vote", controller.vote);
router.get("/voting-registration", controller.voting_registration);
router.get("/live-results", controller.live_results);
router.get("/candidate-registration", controller.candidate_registration);

///////////////// Admin //////////////////
router.get("/admin", adminController.dashboard);
router.get("/admin/create-position", adminController.create_position);
router.get("/admin/create-election", adminController.create_election);

module.exports = router;
