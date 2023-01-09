<!-- ABOUT THE PROJECT -->

## About The Project

MERN Stack Application for tracking Job Search Process

### Features

- Login / Sign-up
- Edit user-data
- Add jobs
- Browse user's jobs with (search + filter) feature
- Display jobs-status + monthly-applications in graphs

### Built With

- React
- React Router
- styled-components
- Node.js
- Express
- MongoDB

## Getting Started

This project require some perquisites and dependencies to be installed, you can find the instructions below

> To get a local copy, follow these simple steps :


### Installation

#### installing Locally

1. Clone the repo
   ```sh
   git clone https://github.com/binyamin12302/job-tracking.git
   ```
2. go to project folder

   ```sh
   cd job-tracking-main
   ```

3. install dependencies

   ```bash
   npm run install && cd client npm run install
   ```

4. Environmental Variables Set up

   - Here are the environmental variables that needs to be set in the `.env` file in the **server directory**.
   - These are the default setting that I used for development, but you can change it to what works for you.

   ```
     PORT=5000
     MONGO_URL=<Your mongodb url>
     JWT_LIFETIME=1d
     JWT_SECRET=<any secret value of your choice>
   ```

5. Run development server

   ```sh
   npm start
   ```

---


#### Ports

- FrontEnd Development Server runs on port `3000`
- BackEnd Development Server runs on port `5000`
