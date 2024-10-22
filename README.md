# Price Optimization Tool

This project is a Price Optimization Tool that allows users to manage product data, forecast demand, and receive pricing optimization recommendations.

## Understanding

The client, a leading global enterprise, aimed to optimize its pricing strategy by developing a web-based Price Optimization Tool. The challenge was to create a solution that would allow users to input product data, analyze pricing trends, and generate optimal pricing recommendations based on demand forecasts and market conditions.

From this, I understood that the core problem was to provide an efficient, data-driven pricing tool that could handle multiple business functionalities while ensuring ease of use and high performance. The application had to be flexible enough to manage various product attributes, forecast demand, and compute optimized prices dynamically, while also catering to different user roles (admin, buyers, suppliers).

## Solution

Developed a scalable and efficient web application using React.js with Vite for the frontend, ensuring a fast, responsive UI. This allowed users to easily manage product data, visualize demand forecasts, and optimize pricing strategies. The backend was built using Flask in Python, secure user authentication and role-based access control, dynamically managing different user permissions for admins, buyers, and suppliers are implemented. MySQL was used as the database, integrated with PyMySQL, to handle product information, demand forecasts, and pricing optimization data efficiently. The database was designed with proper indexing for fast and secure data access. 

## About the Project
The Price Optimization Tool enables users to:
- Create, update,view and delete product data.
- Search and filter products.
- Visualize demand forecasts.
- Optimize product pricing based on various inputs.

The application is built using a React.js frontend with Vite and a Python Flask backend. It integrates with a MySQL database using PyMySQL, managed through MyPHP Admin and XAMPP.

## Tech Stack
- **Frontend**: React.js (Vite)
- **Backend**: Flask (Python)
- **Database**: MySQL with PyMySQL
- **Other Tools**: XAMPP, MyPHP Admin

## Features
- **Product Management**: Add, update, delete, search, and filter products.
- **Demand Forecast**: Visualize demand forecasts for products.
- **Pricing Optimization**: Get optimized product pricing in a tabular format.
- **User Roles**: Role-based access control for admin, buyers, and suppliers.

## Prerequisites

Before setting up the project, ensure that you have the following installed on your machine:

### 1. **Node.js and npm**
   - Install [Node.js](https://nodejs.org/) (which includes npm) to run the React frontend.
   - Recommended version: Node.js v14.x or higher.

### 2. **Python 3.x**
   - Install [Python 3.x](https://www.python.org/downloads/) for the Flask backend.
   - Recommended version: Python 3.8 or higher.

### 3. **Flask and Python Packages**
   - Install Flask and related dependencies for backend development. These are specified in the `requirements.txt` file.

### 4. **MySQL Database**
   - Install [MySQL](https://dev.mysql.com/downloads/) for managing the application's data. Ensure that the MySQL server is running, and the required database is set up.

### 5. **XAMPP (Optional)**
   - [XAMPP](https://www.apachefriends.org/index.html) can be used to easily manage MySQL, especially for local development environments.

#### Frontend Setup

1. Clone the main repository pricing fullstack:
   
   `cd pricing-tool/`
   `Install dependencies -> npm install`
   `Run Frontend Server -> npm run dev`


### BACKEND Setup
2. Clone the repository for pricing fullstack:

   `cd pricing-backend/`
   `python3 -m venv venv`
   `source venv/bin/activate`
   # On Windows: `venv\Scripts\activate`
   Install dependencies -> `pip install -r requirements.txt`
   

   Database Migrations
   `flask db init`
   `flask db migrate`
   `flask db upgrade`

   RUN THE APP
   `export FLASK_APP=app.py`
   `flask run`

# API Endpoints

The backend exposes a number of RESTful API endpoints for managing products, pricing data, and user authentication.

## Endpoints

- **POST** `/api/products` - Upload a new product (Admin only)
- **GET** `/api/products` - Fetch Product data 
- **POST** `/api/products/<int:product_id>` - Upload a new product (Admin only)
- **DELETE** `/api/products/<int:product_id>:` - Remove a product
- **GET** `/api/pricing` - Fetch Pricing data
- **POST** `/login` - User Authentication

 ## Frontend Available at 
 `http://localhost:5173`

 ## Backend Available at 
 `http://localhost:5000`

## Contact

For any questions or suggestions, feel free to reach out:

- **Name**: Priyadarshana Jain
- **Email**: priyadarshanajain290@gmail.com

   

