This project is the backend part of the Hospital Food Delivery Management System designed to manage patient meal deliveries in a hospital. The system allows the hospital food manager to track patient details, assign tasks to pantry staff, and monitor food delivery statuses. The frontend part of the system is yet to be implemented.

Key Features
1. Hospital Food Manager Functionality:
Manage Patient Details:
Patient Name, Diseases, Allergies, Room Number, Bed Number, Floor Number, Age, Gender, Contact Information, Emergency Contact, and more.
Create Food/Diet Charts for Patients:
Morning, Evening, and Night meal plans with specific instructions.
Ingredient details for each meal.
Manage Inner Pantry:
Pantry staff details: Name, Contact Info, Location.
Assign food preparation and delivery tasks to pantry staff.
Track Meal Preparation & Delivery:
Monitor preparation and delivery status for each meal.
2. Inner Pantry Functionality:
Manage Food Preparation Tasks:
View assigned tasks and update meal preparation status.
Manage Delivery Personnel:
Add details for delivery personnel and assign meals.
Track Meal Deliveries:
View details for each meal box and mark meals as "Delivered".
3. Delivery Personnel Functionality:
Mark Deliveries as Completed:
Login to the pantry portal and mark meals as "Done" once delivered.
Technologies Used
Backend:
NestJS: A Node.js framework for building efficient, scalable web applications.
Prisma: ORM for easy database interaction.
PostgreSQL / MongoDB: Relational/NoSQL database to store data.
JWT Authentication: Secure authentication for APIs.
API Endpoints
Authentication
POST /auth/login: Login and receive a JWT token.
POST /auth/signup: Register a new user.
Patient Management
GET /patients: Get all patients.
POST /patients: Add a new patient.
PUT /patients/{id}: Update patient details.
DELETE /patients/{id}: Delete a patient.
Food/Diet Chart Management
GET /diet-charts: Get all diet charts.
POST /diet-charts: Create a new diet chart.
PUT /diet-charts/{id}: Update diet chart.
DELETE /diet-charts/{id}: Delete diet chart.
Meal Preparation & Delivery
GET /tasks: Get all meal preparation tasks.
POST /tasks: Assign a new meal preparation task.
PUT /tasks/{id}: Update task status.
GET /deliveries: Get all meal deliveries.
POST /deliveries: Mark a meal as delivered.
Installation
Clone the repository:

bash
Copy
Edit
git clone <repository-link>
cd hospital-food-delivery-management
Install dependencies: Ensure that Node.js is installed, then run:

bash
Copy
Edit
npm install
Configure environment variables: Create a .env file at the root and configure your environment variables:

bash
Copy
Edit
DATABASE_URL=<your-database-url>
JWT_SECRET=<your-jwt-secret>
Run the development server:

bash
Copy
Edit
npm run start:dev
This will start the backend server on http://localhost:5000.

Database Setup
Patient Details: Name, diseases, allergies, room number, etc.
Diet Charts: Meal plans, ingredients, instructions.
Pantry Staff: Name, contact info, assigned tasks.
Delivery Personnel: Name, assigned meals, delivery status.
Deployment
Backend: Deployed on your preferred platform (e.g., Render, Railway).
GitHub Repository
ccess the project’s code at:https://github.com/apoorvaa227/hospital_food_management
