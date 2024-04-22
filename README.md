# Endpoints

## 1. Create Text File

### Request

- **URL:** `/api/create-file`
- **Method:** POST
- **Request Body:** None

### Response

- **Success Response:**
  - **Code:** 200 OK
  - **Content:** File created successfully.

- **Error Response:**
  - **Code:** 500 Internal Server Error
  - **Content:** Error occurred while creating the file.

## 2. Retrieve All Text Files

### Request

- **URL:** `/api/get-files`
- **Method:** GET

### Response

- **Success Response:**
  - **Code:** 200 OK
  - **Content:** Array of file names in the folder.

- **Error Response:**
  - **Code:** 500 Internal Server Error
  - **Content:** Error occurred while retrieving files.

# Usage

1. **Create a text file:**
   - Send a POST request to `/api/create-file` endpoint.
   - Check the folder for the newly created file with the current timestamp.

2. **Retrieve all text files:**
   - Send a GET request to `/api/get-files` endpoint.
   - Receive an array of file names in the folder.

# Testing

1. Use tools like Postman to test the API endpoints.
2. Ensure proper error handling for various scenarios.
3. Test the API thoroughly to ensure reliability.
