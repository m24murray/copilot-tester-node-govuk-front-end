import express from 'express';
import path from 'path';
import nunjucks from 'nunjucks';
const { check, validationResult } = require('express-validator');
import { Request, Response } from 'express';
import session from 'express-session';

// Extend the session interface to include contact and address properties
declare module 'express-session' {
  interface SessionData {
    contact: { [key: string]: any };
    address: { [key: string]: any };
  }
}

const app = express();

// Configure session middleware
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Set to true if using HTTPS
}));

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

    req.session.contact = req.body;
    res.redirect('/address');
  }
);

// Route to render the address details form
app.get('/address', (req, res) => {
  res.render('address.njk');
});

// Add validation and error handling for the address form
app.post(
  '/address',
  [
    check('addressLine1').notEmpty().withMessage('Address Line 1 is required'),
    check('postcode').matches(/[A-Z]{1,2}[0-9R][0-9A-Z]? ?[0-9][ABD-HJLNP-UW-Z]{2}/).withMessage('Valid UK postcode is required'),
    check('city').notEmpty().withMessage('City is required'),
    check('country').notEmpty().withMessage('Country is required'),
  ],
  (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render('address.njk', {
        errors: errors.array(),
        data: req.body,
      });
    }
    req.session.address = req.body;
    res.redirect('/summary');
  }
);

// Route to render the summary page
app.get('/summary', (req, res) => {
  const contact = req.session.contact;
  const address = req.session.address;
  res.render('summary.njk', { contact, address });
});

export default app;
