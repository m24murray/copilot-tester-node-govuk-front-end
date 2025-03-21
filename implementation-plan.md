# Implementation Plan for Register Short Term Lets

## Iteration 1: Project Setup
### Tasks
1. Initialize a new Node.js project with TypeScript.
2. Install required dependencies: `express`, `typescript`, `govuk-frontend`, `nunjucks`, `jest`, and `nodemon`.
3. Configure `tsconfig.json` for TypeScript compilation.
4. Set up basic folder structure: `src/` for application code, `views/` for templates, and `tests/` for unit tests.
5. Create a basic Express server in `src/server.ts`.
6. Configure `package.json` with build, start, and test scripts.

### Placeholders
- **Current Status**: Complete
- **Lines of Code Added**: 50
- **Number of Unit Tests Added**: 0
- **Cost to Implement**:
  - **In/Out Tokens Consumed**: 500
  - **Approx. Cost in Dollars**: $0.05
  - **API Time**: 2 seconds
  - **Wall Time**: 1 hour

## Iteration 2: Start Page Implementation
### Tasks
1. Create a Nunjucks template for the start page with lorem ipsum text.
2. Configure Express to serve static assets and render Nunjucks templates.
3. Add a route in `src/server.ts` to render the start page.
4. Test the start page rendering in the browser.

### Placeholders
- **Current Status**: Complete
- **Lines of Code Added**: 120
- **Number of Unit Tests Added**: 0
- **Cost to Implement**:
  - **In/Out Tokens Consumed**: 800
  - **Approx. Cost in Dollars**: $0.08
  - **API Time**: 3 seconds
  - **Wall Time**: 1.5 hours

## Iteration 3: Contact Details Form
### Tasks
1. Create a Nunjucks template for the contact details form with fields for full name, email address, and contact number.
2. Add basic validation for the form fields (e.g., required fields, email format).
3. Add a route in `src/server.ts` to render the contact details form.
4. Implement a POST route to handle form submission and log the data in JSON format with timestamps.
5. Display inline and summary error messages for validation errors.

### Placeholders
- **Current Status**: Complete
- **Lines of Code Added**: 40
- **Number of Unit Tests Added**: 2
- **Cost to Implement**:
  - **In/Out Tokens Consumed**: 1000
  - **Approx. Cost in Dollars**: $0.10
  - **API Time**: 5 seconds
  - **Wall Time**: 2 hours

## Iteration 4: Address Details Form
### Tasks
1. Create a Nunjucks template for the address details form with fields for address line 1, address line 2, postcode, city, town, and country.
2. Add basic validation for the form fields (e.g., required fields, UK postcode format).
3. Add a route in `src/server.ts` to render the address details form.
4. Implement a POST route to handle form submission and log the data in JSON format with timestamps.
5. Display inline and summary error messages for validation errors.

### Placeholders
- **Current Status**: Complete
- **Lines of Code Added**: 60
- **Number of Unit Tests Added**: 2
- **Cost to Implement**:
  - **In/Out Tokens Consumed**: 1200
  - **Approx. Cost in Dollars**: $0.12
  - **API Time**: 6 seconds
  - **Wall Time**: 2.5 hours

## Iteration 5: Summary Page
### Tasks
1. Create a Nunjucks template for the summary page to display the submitted contact and address details.
2. Add a route in `src/app.ts` to render the summary page.
3. Implement navigation from the contact and address forms to the summary page.
4. Ensure the start page redirects to the contact page, the contact page redirects to the address page, and the address page redirects to the summary page.

### Placeholders
- **Current Status**: Complete
- **Lines of Code Added**: 30
- **Number of Unit Tests Added**: 0
- **Cost to Implement**:
  - **In/Out Tokens Consumed**: 800
  - **Approx. Cost in Dollars**: $0.08
  - **API Time**: 4 seconds
  - **Wall Time**: 1.5 hours

## Iteration 6: Submitted Page
### Tasks
1. Create a Nunjucks template for the submitted page with a confirmation message and a button to return to the start page.
2. Add a route in `src/app.ts` to render the submitted page.
3. Implement navigation from the summary page to the submitted page.

### Placeholders
