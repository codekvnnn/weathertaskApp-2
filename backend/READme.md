# Backend for Weather and Task Manager

## Overview
This is the backend service for the Weather and Task Manager project. It handles API requests for weather data and task management.

## Setup
1. Install dependencies:
   ```bash
   npm install
2. Create a .env file with your API keys:
WEATHER_API_KEY=<your_openweathermap_api_key>
3. Start the server
npm start

 ## Endpoints
GET /api/weather?city={city_name}: Get current weather data.
GET /api/tasks: Get all tasks.
POST /api/tasks: Create a new task.

## Dependencies
express
cors
dotenv
axios

---

### **Frontend Code**

#### `frontend/public/index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Weather and Task Manager</title>
</head>
<body>
  <div id="root"></div>
</body>
</html>
