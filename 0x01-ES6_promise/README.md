# JavaScript Promises Tasks :wink:

This repository contains solutions for tasks related to working with Promises in JavaScript.

## Task Descriptions

### Task 0: Keep every promise you make and only make promises you can keep
- Prototype function `getResponseFromAPI()` returns a Promise.
- Verify if the returned value from `getResponseFromAPI()` is an instance of Promise.

### Task 1: Don't make a promise...if you know you can't keep it
- Function `getFullResponseFromAPI(success)` returns a Promise.
- Resolves or rejects the Promise based on the boolean parameter.
  - Resolves with an object `{ status: 200, body: 'Success' }` if `success` is true.
  - Rejects with an error object containing the message "The fake API is not working currently" if `success` is false.

### Task 2: Catch me if you can!
- Function `handleResponseFromAPI(promise)` takes a Promise as a parameter.
- Appends handlers to the Promise:
  - Resolves with an object `{ status: 200, body: 'success' }`.
  - Rejects with an empty Error object.
  - Logs "Got a response from the API" for each resolution.

### Task 3: Handle multiple successful promises
- Imports `uploadPhoto` and `createUser` from `utils.js`.
- Function `handleProfileSignup()` resolves multiple promises and logs `firstName lastName` from resolved promises.
- Logs "Signup system offline" in case of an error.

### Task 4: Simple promise
- Function `signUpUser(firstName, lastName)` returns a resolved Promise with an object `{ firstName: value, lastName: value }`.

### Task 5: Reject the promises
- Function `uploadPhoto(filename)` returns a Promise rejecting with an Error and a specific message.

### Task 6: Handle multiple promises
- Imports `signUpUser` and `uploadPhoto`.
- Function `handleProfileSignup(firstName, lastName, fileName)` calls both functions and returns an array with the status and value/error of each promise.

### Task 7: Load balancer
- Function `loadBalancer(chinaDownload, USDownload)` returns the value of the resolved promise that is faster.

### Task 8: Throw error / try catch
- Function `divideFunction(numerator, denominator)` throws an error when dividing by zero.

### Task 9: Throw an error
- Function `guardrail(mathFunction)` captures the return value or error message from `mathFunction` and adds it to an array along with a message "Guardrail was processed".

### Task 10: Await / Async
- Imports `uploadPhoto` and `createUser`.
- Function `asyncUploadUser()` calls both functions asynchronously and returns an object with their responses. If any function fails, it returns an empty object.

## Running the Code
- Each task has its respective main file (e.g., `0-main.js`, `1-main.js`) to execute and test the functions.
- Use `npm run dev [filename]` to run the main files and see the output for each task.

## Repository Structure
- `0x01-ES6_promise/`: Directory containing the JavaScript files for each task.
  - `0-promise.js` to `100-await.js`: Files for individual tasks.
