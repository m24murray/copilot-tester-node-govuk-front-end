import request from 'supertest';
import app from '../src/app';

// Updated tests to use supertest for testing Express routes

describe('Contact Routes', () => {
  it('should render the contact form', async () => {
    const response = await request(app).get('/contact');
    expect(response.status).toBe(200);
    expect(response.text).toContain('<h1 class="govuk-heading-l">Contact Details</h1>');
  });

  it('should handle form submission', async () => {
    const response = await request(app)
      .post('/contact')
      .send({
        fullName: 'John Doe',
        email: 'john.doe@example.com',
        contactNumber: '1234567890',
      });
    expect(response.status).toBe(302);
  });
});

describe('Address Routes', () => {
  it('should render the address form', async () => {
    const response = await request(app).get('/address');
    expect(response.status).toBe(200);
    expect(response.text).toContain('<h1 class="govuk-heading-l">Address Details</h1>');
  });

  it('should handle form submission', async () => {
    const response = await request(app)
      .post('/address')
      .send({
        addressLine1: '123 Main St',
        addressLine2: 'Apt 4B',
        postcode: 'SW1A 1AA',
        city: 'London',
        town: 'Westminster',
        country: 'UK',
      });
    expect(response.status).toBe(302);
  });
});