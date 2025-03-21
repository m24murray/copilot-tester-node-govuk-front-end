import express from 'express';
import path from 'path';
import nunjucks from 'nunjucks';
const { check, validationResult } = require('express-validator');
import { Request, Response } from 'express';

const app = express();

// Configure Nunjucks for template rendering
nunjucks.configure([
  path.join(__dirname, '../views'),
  path.join(__dirname, '../node_modules/govuk-frontend/dist/govuk'),
], {
  autoescape: true,
  express: app
});

// Middleware to parse JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/assets', express.static(path.join(__dirname, '../static')));

// Route for the start page
app.get('/', (req, res) => {
  res.render('start.njk');
});

// Route to render the contact details form
app.get('/contact', (req, res) => {
  res.render('contact.njk');
});

// Add validation and error handling for the contact form
app.post(
  '/contact',
  [
    check('fullName').notEmpty().withMessage('Full name is required'),
    check('email').isEmail().withMessage('Valid email is required'),
    check('contactNumber').notEmpty().withMessage('Contact number is required'),
  ],
  (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).render('contact.njk', {
        errors: errors.array(),
        data: req.body,
      });
    }

    const { fullName, email, contactNumber } = req.body;
    console.log({
      timestamp: new Date().toISOString(),
      fullName,
      email,
      contactNumber,
    });

    res.redirect('/summary');
  }
);

export default app;
