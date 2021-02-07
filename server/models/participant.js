const mongoose = require("mongoose");

const participantSchema = mongoose.Schema({
	result: {
		type: String,
		required: true,
	},
	choices: {
		type: [String],
		required: true,
	},
	timestamp: {
		type: Date,
		default: Date.now,
	},
});

const Participant = mongoose.model("Participant", participantSchema);

module.exports = Participant;
