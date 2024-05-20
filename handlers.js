const Application = require("./modles/applications");

async function readApplications(req, res) {
  try {
    const notes = await Application.find();
    res.status(200).send(notes);
  } catch (error) {
    console.error(error);
    res.status(500).send("Unable to find Notes");
  }
}

async function postApplication(request, response) {
  const {
    jobTitle,
    companyName,
    dateApplied,
    applicationLink,
    status,
    jobDescription,
    location,
    notes,
    salaryRange,
    contactName,
    contactEmail,
    jobReferenceID,
  } = request.body;
  try {
    const newApplication = await Application.create({
      jobTitle,
      companyName,
      dateApplied,
      applicationLink,
      status,
      jobDescription,
      location,
      notes,
      salaryRange,
      contactName,
      contactEmail,
      jobReferenceID,
    });
    response.send(newApplication);
  } catch (error) {
    console.error(error);
    response.status(500).send("Error creating new Applicaiton");
  }
}

async function deleteApplication(request, response) {
  const id = request.params.id;

  try {
    await Application.findOneAndDelete({ _id: id });
    response.status(204).send("successfully deleted");
  } catch (error) {
    console.error(error);
    response.status(404).send(`Unable to delete application with id ${id}`);
  }
}

async function updateApplication(request, response) {
  const id = request.params.id;

  try {
    await Application.findOneAndUpdate({ _id: id }, request.body, {
      new: true,
    });
    response.status(200).send("successfully updated");
  } catch (error) {
    console.error(error);
    response.status(500).send(`Unable to update note with id ${id}`);
  }
}

module.exports = {
  readApplications,
  postApplication,
  deleteApplication,
  updateApplication,
};
