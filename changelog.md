# Changelog

## [20 March 2025]
- Completed Iteration 1: Project Setup.
  - Initialized Node.js project with TypeScript.
  - Installed dependencies: express, govuk-frontend, nunjucks, jest, nodemon, and typescript.
  - Configured `tsconfig.json` for TypeScript.
  - Created basic folder structure: `src/`, `views/`, `tests/`.
  - Created a basic Express server in `src/server.ts`.
  - Updated `package.json` with build, start, dev, and test scripts.

- Completed Iteration 2: Start Page Implementation.
  - Created a Nunjucks template for the start page (`views/start.njk`).
  - Configured Express to serve static assets and render Nunjucks templates.
  - Added a route in `src/server.ts` to render the start page.
  - Tested the start page rendering in the browser.

- Completed Iteration 3: Contact Details Form.
  - Created a Nunjucks template for the contact details form (`views/contact.njk`).
  - Added GET and POST routes in `src/app.ts` to render the form and handle submissions.
  - Added validation for required fields and email format.
  - Implemented inline and summary error messages for validation errors.
  - Updated POST route in `src/app.ts` to handle validation and log data in JSON format with timestamps.
  - Updated unit tests in `tests/contactRoutes.test.ts` to cover validation and error handling.

## [21 March 2025]
- Completed Iteration 4: Address Details Form.
  - Created a Nunjucks template for the address details form (`views/address.njk`).
  - Added GET and POST routes in `src/app.ts` to render the form and handle submissions.
  - Added validation for required fields and UK postcode format.
  - Implemented inline and summary error messages for validation errors.
  - Updated POST route in `src/app.ts` to handle validation and log data in JSON format with timestamps.
  - Added unit tests in `tests/contactRoutes.test.ts` to cover validation and error handling for the address form.