# Specification for Register Short Term Lets

## Project Overview
The "Register Short Term Lets" app is a Node.js front-end web application designed to allow users to submit name and address information. The app will strictly adhere to the GOV.UK Design System (GDS) for styles, components, and patterns.

## Details
- **Framework**: Node.js with Express, using TypeScript.
- **Dependency Management**: npm.
- **Design System**: GOV.UK Design System (installed via `npm install govuk-frontend --save`).
- **Templating Engine**: Nunjucks.
- **Testing Framework**: Jest for unit testing.
- **Hot Reloading**: nodemon.
- **Build Commands**: Basic commands for building, hot reloading, and running tests.
- **Security**: Basic CSRF protection using Express's default mechanisms. Standard security headers will be configured, and lower-level implementation details (e.g., `x-powered-by`) will be hidden.
- **Logging**: Submitted data will be logged in JSON format with timestamps.
- **Validation**: Basic validation for all fields, including standard email validation and UK-specific postcode format.

## Application Overview
The app consists of five screens:
1. **Start Page**: Displays basic information about the service (using lorem ipsum text).
2. **Enter Your Contact Details**: A form with fields for full name, email address, and contact number.
3. **Enter Your Address Details**: A form with fields for address line 1, address line 2, postcode, city, town, and country.
4. **Summary**: Displays a summary of the information entered in the previous two screens.
5. **Submitted**: A confirmation screen indicating the form has been completed, with a button to return to the start page.

## Refinement Details
- **Form Errors**: Errors will be displayed both inline next to the fields and as a summary at the top of the page, following GDS recommendations.
- **Accessibility**: The app will strictly adhere to GDS accessibility standards.
- **Deployment**: A basic Dockerfile will be included for deployment preparation.

## Dockerfile
A basic Dockerfile for the app:
```dockerfile
# Use the official Node.js image as the base image
FROM node:18

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]
```

This Dockerfile sets up a basic environment for running the Node.js app.