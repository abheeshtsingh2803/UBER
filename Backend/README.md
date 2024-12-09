# User Registration Endpoint

## Endpoint
`POST /users/register`

## Description
This endpoint allows a new user to register by providing their details. Upon successful registration, a JSON Web Token (JWT) is generated and returned along with the user information.

## Request Body
The request body must be in JSON format and should include the following fields:

- `fullname`: An object containing the user's full name.
  - `firstname`: A string representing the user's first name (minimum length: 3 characters).
  - `lastname`: A string representing the user's last name (minimum length: 3 characters).
- `email`: A string representing the user's email address (must be a valid email format and unique).
- `password`: A string representing the user's password (minimum length: 6 characters).

### Example Request
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securePassword123"
}
````

# User Login Endpoint

## Endpoint
`POST /users/login`

## Description
This endpoint allows an existing user to log in by providing their email and password. Upon successful login, a JSON Web Token (JWT) is generated and returned along with the user information.

## Request Body
The request body must be in JSON format and should include the following fields:

- `email`: A string representing the user's email address (must be a valid email format).
- `password`: A string representing the user's password.

### Example Request
```json
{
  "email": "john.doe@example.com",
  "password": "securePassword123"
}
````

### Example Response
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

# User Profile Endpoint

- **Description**: Fetches the profile information of the authenticated user.

- **Method**: `GET`

- **URL**: `/users/profile`

- **Headers**: `Authorization`: `Bearer <your_token>`

- **Response**:
- **Success (200)**:
    ```json
    {
      "status": "success",
      "data": {
        "id": "12345",
        "name": "John Doe",
        "email": "johndoe@example.com",
        "createdAt": "2024-01-01T10:00:00Z",
        "updatedAt": "2024-01-02T12:00:00Z"
      }
    }
    ```
- **Error (401)**:
    ```json
    {
      "status": "error",
      "message": "Unauthorized"
    }
    ```

- **Example cURL Request**:
  ```bash
  curl -X GET http://localhost:3000/users/profile \
  -H "Authorization: Bearer <your_token>"
  ```

# User login Endpoint
- **Description**: Logs out the authenticated user by invalidating their token.

- **Method**: `POST`

- **URL**: `/users/logout`

- **Headers**:
  - `Authorization`: `Bearer <your_token>`

- **Response**:

  - **Success (200)**:

```json
{
  "status": "success",
  "message": "Logged out successfully"
}
```
- **Error (401)**:

```json
{
  "status": "error",
  "message": "Unauthorized"
}
```
- **Error (500)**:

```json
{
  "status": "error",
  "message": "Internal Server Error"
}
```
- **Example cURL Request**:
```bash
curl -X POST http://localhost:3000/users/logout \
-H "Authorization: Bearer <your_token>"
```