const mongoose = require("mongoose");

const { Schema } = mongoose;

const applicationSchema = new Schema({
  jobTitle: String,
  companyName: String,
  dateApplied: String,
  applicationLink: String,
  status: String,
  jobDescription: String,
  location: String,
  notes: String,
  salaryRange: String,
  contactName: String,
  contactEmail: String,
  jobReferenceID: String,
});

const Application = mongoose.model("Application", applicationSchema);

module.exports = Application;
