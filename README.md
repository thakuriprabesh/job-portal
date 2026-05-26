# Job Portal System with Admin Dashboard

A full-stack web-based recruitment management platform built using the MERN stack. The system connects job seekers, employers, and administrators through role-based dashboards and supports job posting, online applications, resume upload, application tracking, admin moderation, payment tracking, notifications, feedback management, and AI-assisted candidate shortlisting.

## 📌 Project Overview

The **Job Portal System with Admin Dashboard** is designed to simplify the recruitment process by providing a centralized platform where:

- Job seekers can search and apply for jobs.
- Employers can post jobs and manage applicants.
- Administrators can monitor users, jobs, payments, feedback, and platform activity.
- AI-assisted shortlisting helps rank applicants based on skills, keywords, experience, education, and resume-job matching.

This project was developed as an academic project for BIT / B.Sc. CSIT.

## 🚀 Features

### 👤 Job Seeker Features

- Register and login securely
- Manage personal profile
- Add education, skills, experience, and contact details
- Upload resume
- Search and filter jobs by title, company, location, salary, skills, and deadline
- Save jobs for later
- Apply for jobs online
- Track application status
- Receive notifications

### 🏢 Employer Features

- Register and manage company profile
- Post, update, close, and delete job posts
- View applicants for each job
- Access candidate resumes and profile details
- Run AI-assisted shortlisting
- View ranked applicants with match scores
- Update applicant status such as submitted, reviewed, shortlisted, rejected, or selected
- Manage premium job/payment records

### 🛠️ Admin Features

- Admin dashboard with platform analytics
- Manage job seekers and employers
- Approve, block, unblock, or delete users
- Moderate job posts
- Track applications, payments, feedback, and activities
- Send notifications or announcements
- Review and respond to feedback
- View activity logs

### 🔐 Security Features

- JWT-based authentication
- bcrypt password hashing
- Role-based access control
- Protected API routes
- Input validation
- File upload validation

## 🧠 AI Shortlisting Module

The AI shortlisting module compares job requirements with applicant profiles and resumes. It calculates a candidate match score using:

- Skill matching
- Resume keyword matching
- Experience matching
- Education matching
- Weighted scoring

Sample scoring formula:

```text
Final Score =
(Skill Score × 0.45) +
(Keyword Score × 0.25) +
(Experience Score × 0.20) +
(Education Score × 0.10)
```

The result helps employers quickly identify the most suitable candidates.

## 🧰 Tech Stack

### Frontend

- React.js
- JavaScript
- HTML5
- CSS3
- Axios
- React Router

### Backend

- Node.js
- Express.js
- REST API
- JWT Authentication
- bcrypt
- Multer / File Upload Package

### Database

- MongoDB
- Mongoose

### Tools

- Visual Studio Code
- Postman
- Git
- GitHub
- MongoDB Compass

## 🏗️ System Architecture

The system follows a three-tier MERN architecture:

```text
Client Browser
      ↓
React Frontend
      ↓
Node.js + Express.js Backend API
      ↓
MongoDB Database
```

Additional backend services include authentication middleware, role-based authorization, file upload handling, AI shortlisting logic, notification handling, and admin analytics.

## 🗂️ Suggested Folder Structure

Update this section according to your actual repository structure.

```text
job-portal-system/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── routes/
│   │   ├── services/
│   │   └── App.jsx
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── uploads/
│   ├── utils/
│   ├── server.js
│   └── package.json
│
├── docs/
│   ├── screenshots/
│   └── report/
│
├── .gitignore
├── README.md
└── package.json
```

## ⚙️ Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/job-portal-system.git
cd job-portal-system
```

### 2. Install Backend Dependencies

```bash
cd server
npm install
```

### 3. Create Backend Environment File

Create a `.env` file inside the `server` folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
CLIENT_URL=http://localhost:5173
```

### 4. Run Backend Server

```bash
npm run dev
```

or

```bash
npm start
```

### 5. Install Frontend Dependencies

Open a new terminal:

```bash
cd client
npm install
```

### 6. Run Frontend

```bash
npm run dev
```

The application should run locally at:

```text
Frontend: http://localhost:5173
Backend:  http://localhost:5000
```

## 🔑 User Roles

| Role | Description |
|---|---|
| Job Seeker | Searches jobs, uploads resume, applies online, and tracks applications |
| Employer | Posts jobs, manages applicants, and uses AI shortlisting |
| Admin | Manages users, jobs, payments, feedback, analytics, and notifications |

## 🧪 Testing

The system was tested using unit testing and system testing for major modules.

### Tested Modules

- User registration
- User login
- Password hashing
- Role-based access control
- Resume upload
- Job posting
- Job search and filtering
- Online application
- AI shortlisting
- Application status update
- Admin user management
- Payment tracking
- Notification workflow
- Feedback workflow
- Dashboard analytics

## 📸 Screenshots

Add your actual screenshots inside `docs/screenshots/` and update the image paths below.

### Home Page

```md
![Home Page](docs/screenshots/home.png)
```

### Login Page

```md
![Login Page](docs/screenshots/login.png)
```

### Job Seeker Dashboard

```md
![Job Seeker Dashboard](docs/screenshots/jobseeker-dashboard.png)
```

### Admin Dashboard

```md
![Admin Dashboard](docs/screenshots/admin-dashboard.png)
```

### AI Shortlisting Result

```md
![AI Shortlisting Result](docs/screenshots/ai-shortlisting.png)
```

## 📊 Database Collections

Main MongoDB collections used in the system:

| Collection | Purpose |
|---|---|
| users | Stores user account and role information |
| jobSeekerProfiles | Stores job seeker profile, skills, education, experience, and resume |
| companies | Stores employer company information |
| jobs | Stores job posts and job requirements |
| applications | Stores submitted job applications and match scores |
| savedJobs | Stores jobs saved by job seekers |
| notifications | Stores user notifications |
| payments | Stores premium service or job payment records |
| feedbacks | Stores user feedback and admin responses |
| activityLogs | Stores admin and platform activity records |

## 📡 Common API Modules

Update endpoint names based on your actual backend routes.

```text
/auth/register
/auth/login
/users
/profiles
/companies
/jobs
/applications
/shortlisting
/notifications
/payments
/feedbacks
/admin/dashboard
```

## ✅ Project Status

The project includes the major modules required for a role-based job portal system:

- Authentication
- Job seeker dashboard
- Employer dashboard
- Admin dashboard
- Job posting
- Job application
- AI shortlisting
- Notification
- Feedback
- Payment tracking
- Testing and documentation

## 🔮 Future Enhancements

- Android and iOS mobile application
- Real payment gateway integration such as eSewa, Khalti, or IME Pay
- Advanced AI resume parsing and NLP-based matching
- Email and SMS notifications
- Company document verification
- Interview scheduling and calendar integration
- Personalized job recommendation engine
- Multilingual support for Nepali and English
- Advanced analytics for job trends and employer performance
- Cloud deployment with backup and monitoring

## 👥 Project Team

- Amardip Sah
- Bipan Prasad Acharya
- Prabesh Kiran Shahi

## 🎓 Academic Information

Submitted to:

**Department of BIT**  
Central Campus of Technology (CCT)  
Hattisar, Dharan, Sunsari, Koshi, Nepal  
Institute of Science and Technology  
Tribhuvan University

## 📄 License

This project is created for academic and learning purposes. You can update this section with a license such as MIT if you want to make the project open source.

```text
MIT License
```

## 🙌 Acknowledgement

This project was completed with support and guidance from the Department of BIT, Central Campus of Technology, and project supervisor/teachers.
