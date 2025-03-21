# copilot-tester-spring-java-mongo

## Register Short Term Lets

### Current Features
- **Start Page**: A welcoming page with a brief description of the service and a button to proceed to the next step.
  - Built using the GOV.UK Design System.
  - Rendered using Nunjucks templates.
- **Contact Details Form**: A form to collect user contact details (full name, email, and contact number).
  - Includes validation for required fields and email format.
  - Displays inline and summary error messages for validation errors.
  - Logs submitted data in JSON format with timestamps.
- **Address Details Form**: A form to collect user address details (address line 1, address line 2, postcode, city, town, and country).
  - Includes validation for required fields and UK postcode format.
  - Displays inline and summary error messages for validation errors.
  - Logs submitted data in JSON format with timestamps.
- **Summary Page**: A page to display the submitted contact and address details.
  - Displays the collected information in a summary format.
  - Provides a button to submit the details.

### How to Run
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open your browser and navigate to `http://localhost:3000` to view the application.

## Domain Models

The application includes the following domain models:

### Contact
- `fullName`: string
- `email`: string
- `contactNumber`: string

### Address
- `addressLine1`: string
- `addressLine2?`: string (optional)
- `postcode`: string
- `city`: string
- `town?`: string (optional)
- `country`: string