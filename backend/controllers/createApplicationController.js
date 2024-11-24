const JobApplication = require('../models/JobApplication');

// Create a new job application
const submitApplication = async (req, res) => {
    try {
        const { applicantId, companyName, positionTitle, applicationDeadline, requiredSkills } = req.body;

        const jobApplication = new JobApplication({
            applicantId,
            companyName,
            positionTitle,
            applicationDeadline,
            requiredSkills,
        });

        await jobApplication.save();
        res.status(201).json({ success: true, data: jobApplication });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get job applications for an applicant
const fetchApplications = async (req, res) => {
    try {
        const { applicantId } = req.params;
        const jobApplications = await JobApplication.find({ applicantId });
        res.status(200).json({ success: true, data: jobApplications });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = { submitApplication, fetchApplications };
