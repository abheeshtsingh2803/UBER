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