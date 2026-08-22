# Food Ordering System

A simple **Food Ordering Web Application** built using **Node.js, Express.js, EJS, and JSON** as a local database. The application is also **Dockerized** for easy deployment and portability.

## Project Information

**Project:** Food Ordering System
**Purpose:** Academic / School Project
**Technologies:** Node.js, Express.js, EJS, JSON, Docker
**Database:** JSON file (local database)

## Features

* View all available food items
* Add a new food item
* Edit food information
* Delete food items
* Check food availability
* Place food orders
* Calculate the total order price automatically
* Store food records using a JSON file
* Server-side rendering using EJS
* Run the application using Docker

## Tech Stack

### Node.js

Used as the JavaScript runtime environment for running the application server.

### Express.js

Used to create the web server and handle application routes and HTTP requests.

### EJS

Used as the template engine to generate dynamic HTML pages.

### JSON

Used as the local database for storing food information.

### Docker

Used to containerize the application so it can run consistently across different environments.

## Project Structure

```text
food-ordering-system/
│
├── data/
│   └── foods.json
│
├── public/
│   └── style.css
│
├── views/
│   ├── index.ejs
│   ├── add.ejs
│   ├── edit.ejs
│   └── order.ejs
│
├── server.js
├── package.json
├── package-lock.json
├── Dockerfile
├── .dockerignore
├── .gitignore
└── README.md
```

## Requirements

Before running the project, make sure you have:

* Node.js
* npm
* Docker Desktop
* Git

## Running the Application Locally

### 1. Clone the repository

```bash
git clone https://github.com/JoshChristian0417/food-ordering-system.git
```

### 2. Open the project

```bash
cd food-ordering-system
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the application

```bash
npm start
```

The application will run at:

```text
http://localhost:8080
```

Open the URL in your web browser to access the Food Ordering System.

## Running with Docker

### 1. Build the Docker image

```bash
docker build -t food-ordering-system .
```

### 2. Run the Docker container

```bash
docker run -d -p 8080:8080 --name food-ordering-system food-ordering-system
```

### 3. Open the application

Go to:

```text
http://localhost:8080
```

### 4. Check the running container

```bash
docker ps
```

### 5. Stop the container

```bash
docker stop food-ordering-system
```

### 6. Start the container again

```bash
docker start food-ordering-system
```

## API / Routes

| Method | Route         | Description                            |
| ------ | ------------- | -------------------------------------- |
| GET    | `/`           | Display all food items                 |
| GET    | `/add`        | Display the add food form              |
| POST   | `/add`        | Add a new food item                    |
| GET    | `/edit/:id`   | Display the edit food form             |
| POST   | `/edit/:id`   | Update food information                |
| POST   | `/delete/:id` | Delete a food item                     |
| GET    | `/order/:id`  | Display the order form                 |
| POST   | `/order/:id`  | Place an order and calculate the total |

## Data Storage

Food information is stored locally in:

```text
data/foods.json
```

Example:

```json
[
  {
    "id": 1,
    "name": "Burger",
    "category": "Fast Food",
    "price": 120,
    "available": true
  },
  {
    "id": 2,
    "name": "Fried Chicken",
    "category": "Main Course",
    "price": 150,
    "available": true
  }
]
```

## Order Calculation

The system automatically calculates the total order price using:

```text
Total = Food Price × Quantity
```

For example:

```text
Food Price: ₱120
Quantity: 2

Total: ₱240
```

## Docker Configuration

The application uses Docker to create a portable environment for running the Food Ordering System.

The application runs on port:

```text
8080
```

The server starts using:

```bash
npm start
```

The Docker container maps port `8080` to port `8080` on the host machine.

## GitHub Repository

**Repository:**

https://github.com/JoshChristian0417/food-ordering-system

## Author

**Josh Christian0417**

Created as an academic project demonstrating the use of:

* Node.js
* Express.js
* EJS
* JSON
* Docker
* Web Application Development

## License

This project was created for **educational purposes**.
