# Knowledge.net
Knowledge.net is designed to offer a comprehensive range of courses, all conveniently accessible through our user-friendly web and interface.

Implemented as a set of RESTful web services, Knowledge.net embraces the Microservices architecture, leveraging Docker and Kubernetes for seamless integration and orchestration. Our asynchronous web client, developed using Mern-Stack, ensures a responsive and dynamic user experience.

For learners, our dedicated service facilitates easy course enrollment and progress tracking, with the flexibility to manage enrollments according to individual preferences. Gone are the days of scheduling conflicts, as our platform enables simultaneous enrollment in multiple courses with ease. With integrated payment gateways, we simplify the enrollment process, allowing learners to seamlessly transition from exploration to acquisition.

# Service Interface
 
 #### There are 4 main services
 1. User
 2. Course
 3. Payement
 4. Notification

# deployment details
Deploying a microservice using Docker involves Dockerizing your application, building a Docker image, and running it as a Docker container. This approach provides a consistent environment for your microservice and simplifies deployment across different platforms.

**install and setup docker in your computer**
use this link to install and setup the docker desktop
[This is an external link to instalation details about docker](https://www.docker.com/get-started/)

**Set up the backend**
- After install the docker desktop and start the docker
- Clone this project 
- Start the project with using this command. "docker compose up" 
- Open http://localhost:5000 to view it in the browser.
- Auth service running on http://localhost:5000/authservice
- CourseServie running on http://localhost:5000/courseservice
- Paymentservice running on http://localhost:5000/paymentservice
- Notificationservice running on http://localhost:5000/notificationservice

**Set up the Frontend**

1. Clone this project and open the terminal and go to frontend folder then install all the dependancies using the npm i or npm install command.
2. Create a config.env file in the root directory and add the specify PORT, VITE_FIREBASE_API_KEY. 
4. Start the project with npm start command. Open http://localhost:5173 to view it in the browser.
