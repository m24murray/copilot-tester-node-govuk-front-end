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