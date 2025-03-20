import express from 'express';
import path from 'path';
import nunjucks from 'nunjucks';

const app = express();
const port = 3000;

// Configure Nunjucks for template rendering
nunjucks.configure(path.join(__dirname, '../views'), {
  autoescape: true,
  express: app
});

// Middleware to parse JSON
app.use(express.json());

// Serve GOV.UK Design System CSS node_modules/govuk-frontend/dist/govuk/govuk-frontend.min.css
console.log(path.join(__dirname, '../node_modules/govuk-frontend/dist/govuk'));
app.use('/assets', express.static(path.join(__dirname, '../static')));

// Route for the start page
app.get('/', (req, res) => {
  res.render('start.njk');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});