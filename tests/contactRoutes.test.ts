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
    expect(response.text).toBe('Found. Redirecting to /summary');
  });
});