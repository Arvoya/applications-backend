require("dotenv").config();
const mongoose = require("mongoose");
const Application = require("./applications.js");

mongoose.connect(process.env.MONGODB_CONN);

async function seed() {
  const myApp = new Application({
    jobTitle: "Software Engineer",
    companyName: "Google",
    dateApplied: "02-28-2024",
    applicationLink: "www.google.com",
    status: "Applied",
    jobDescription: "This is the job description.",
    location: "Mountain View, CA",
    notes: "These are my notes.",
    salaryRange: "$100,000 - $150,000",
    contactName: "John Doe",
    contactEmail: "example@gmail.com",
    jobReferenceID: "1234",
  });

  await myApp.save();

  console.log("Mongoose db has been seeded");
  mongoose.disconnect();
}

seed();
