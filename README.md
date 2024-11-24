# 6_Auro_Digital_Intership_Job_App_Tracker

# Description
Job Tracker is a full-stack web application designed to help users manage their job applications, track their progress, and analyze their skills gap. It allows users to register, log in, and organize job applications by tracking essential details like company name, job title, application status, and required skills. The application also supports user skill management, enabling users to update and monitor their skill set over time.

This project aims to streamline the job application process and provide users with insights into their job-search progress and areas for improvement.

# Features

**1. User Authentication and Authorization**
Register: Users can create an account by providing their name, email, password, and skills.
Login: Registered users can log in using their email and password.
Skill Management: Users can update their skills after logging in to keep their profiles up to date.

**2. Job Application Management**
Create Application: Users can add job applications by providing details such as the company name, job title, application deadline, and required skills.
View Applications: Users can view all their job applications, including the status (Applied, Interviewing, Accepted, Rejected).
Track Application Status: Users can track the status of each job application and update the application status as they progress through the hiring process.

**3. Skill Gap Analysis**
View Skills: Users can view their skills stored in their profile.
Skill Updates: Users can update their skills over time to improve their job prospects and keep track of their progress.

**4. Role-Based Access**
Protected Routes: Only authenticated users can access certain features, ensuring data privacy and security.

# Technologies Used
**Frontend**: React.js for the user interface.
**Backend**: Node.js with Express.js for handling HTTP requests.
**Database**: MongoDB for storing user data, job applications, and skills.
**Authentication**: JSON Web Token (JWT) for secure user authentication.
**Validation**: Custom middleware for validating application input and ensuring that users are authenticated.
**Password** Security: bcrypt for hashing and securely storing user passwords.
