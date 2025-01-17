# Drone Delivery System

## Project Structure

```
drone_delivery_system/
├── models/
│   └── user.js
├── routes/
│   └── addressRoutes.js
│   └── userRoutes.js
├── server.js
├── package.json
```

## API Routes

### 1. User Routes (userRoutes.js)

#### **POST /register**
**Description:** Registers a new user without password hashing.

**Request Body:**
```json
{
  "name": "string [required]",
  "email": "string [required, unique]",
  "password": "string [required]"
}
```

**Response:**
- **Status: 201 Created**
  ```json
  {
    "status": 201,
    "message": "User registered successfully",
    "data": {
      "name": "User's Name",
      "email": "user@example.com",
      "password": "user_password",
      "address": {}
    }
  }
  ```
- **Status: 400 Bad Request**
  ```json
  {
    "status": 400,
    "message": "Failed to register user",
    "error": "Error message"
  }
  ```

#### **POST /login**
**Description:** Logs a user in by validating the email and password.

**Request Body:**
```json
{
  "email": "string [required]",
  "password": "string [required]"
}
```

**Response:**
- **Status: 200 OK**
  ```json
  {
    "status": 200,
    "message": "Login successful",
    "data": {
      "name": "User's Name",
      "email": "user@example.com"
    }
  }
  ```
- **Status: 400 Bad Request**
  ```json
  {
    "status": 400,
    "message": "Invalid credentials"
  }
  ```

#### **POST /logout**
**Description:** Logs the user out by destroying the session.

**Response:**
- **Status: 200 OK**
  ```json
  {
    "status": 200,
    "message": "Logout successful"
  }
  ```

#### **GET /session**
**Description:** Gets the session details of the logged-in user.

**Response:**
- **Status: 200 OK**
  ```json
  {
    "status": 200,
    "message": "User is logged in",
    "data": {
      "id": "user_id",
      "email": "user@example.com",
      "name": "User's Name"
    }
  }
  ```
- **Status: 401 Unauthorized**
  ```json
  {
    "status": 401,
    "message": "No active session"
  }
  ```

---

### 2. Address Routes (addressRoutes.js)

#### **POST /address/:userId**
**Description:** Updates the address of a user based on userId (from URL or session).

**Request Body:**
```json
{
  "street": "string [required]",
  "city": "string [required]",
  "state": "string [required]",
  "zip": "string [required]"
}
```

**Response:**
- **Status: 200 OK**
  ```json
  {
    "status": 200,
    "message": "Address updated successfully",
    "address": {
      "street": "Street Name",
      "city": "City Name",
      "state": "State Name",
      "zip": "Zip Code"
    }
  }
  ```
- **Status: 400 Bad Request**
  ```json
  {
    "status": 400,
    "error": "All fields (street, city, state, zip) are required"
  }
  ```
- **Status: 401 Unauthorized**
  ```json
  {
    "status": 401,
    "error": "Not logged in or no user ID provided"
  }
  ```
- **Status: 404 Not Found**
  ```json
  {
    "status": 404,
    "error": "User not found"
  }
  ```

#### **GET /profile/:userId**
**Description:** Gets the profile details of the user based on userId (from URL or session).

**Response:**
- **Status: 200 OK**
  ```json
  {
    "status": 200,
    "user": {
      "name": "User's Name",
      "email": "user@example.com",
      "address": "User's address or No address set yet"
    }
  }
  ```
- **Status: 401 Unauthorized**
  ```json
  {
    "status": 401,
    "error": "Not logged in or no user ID provided"
  }
  ```
- **Status: 404 Not Found**
  ```json
  {
    "status": 404,
    "error": "User not found"
  }
  ```

---

## Running the Project

### 1. Installation
Clone the repository:
```bash
git clone <repository_url>
```
Install dependencies:
```bash
npm install
```

### 2. Configuration
Add your environment variables to the `.env` file:
```env
MONGO_URI=<your_mongo_connection_string>
SESSION_SECRET=<your_session_secret>
BASE_URL=<your_base_url> 
```

### 3. Starting the Server
Run the server:
```bash
npm run dev
```
By default, the server will run on [http://localhost:5000](http://localhost:5000).

### 4. Testing
Use tools like Thunder Client or Postman to test the API routes. Ensure you provide necessary data (e.g., name, email, password) in the request body and use the correct `userId` for `/address` and `/profile` routes.

---

## Error Handling
All API responses return a status code and a message. For invalid requests or failures, appropriate status codes (e.g., 400, 401, 404) and error messages are returned.

