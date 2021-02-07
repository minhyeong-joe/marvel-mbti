const express = require("express");
const Participant = require("../models/participant");
const router = express.Router();

// GET BASE_URL/statistics/all
// returns all documents stored in the collection
// not useful for the app, but can be used for data analysis
router.get("/all", async (req, res) => {
	try {
		const data = await Participant.find();
		res.status(200).json({ participants: data });
	} catch (err) {
		res.status(404).json({ message: err.message });
	}
});

// GET BASE_URL/statistics/:result_mbti?
// returns number of data matching that result
// OR returns number of ALL data if :result is not provided
router.get("/:result?", async (req, res) => {
	const { result } = req.params;
	if (result) {
		try {
			const numData = await Participant.countDocuments({ result: result });
			res.status(200).json({ query: result, count: numData });
		} catch (error) {
			res.status(404).json({ message: error.message });
		}
	} else {
		try {
			const numData = await Participant.countDocuments();
			res.status(200).json({ query: "all", count: numData });
		} catch (error) {
			res.status(404).json({ message: error.message });
		}
	}
});

// POST BASE_URL/statistics
// Insert new document to the collection
router.post("/", async (req, res) => {
	const newParticipantData = req.body;
	const newParticipant = new Participant(newParticipantData);
	try {
		await newParticipant.save();
		res.status(201).json(newParticipant);
	} catch (error) {
		res.status(409).json({ message: error.message });
	}
});

module.exports = router;
