import request from 'supertest';

import app from '../index';
import { fetchById } from '../services/user.services';

describe('Users', () => {
  let signupUser: any;
  let loggedInUser: any;
  // Tests User Login
  describe('User Login', () => {
    it('should login user', async () => {
      let response: any;

      response = await request(app)
        .post('/api/v1/login')
        .set('Accept', 'application/json')
        .send({
          email: 'biswas@gmail.com',
          password: 'hello'
        })
        .expect(200);

      loggedInUser = response.body.data;

      // Assert
      const user = await fetchById(response.body.data.id);
      expect(response.body).toMatchObject({
        status: 200,
        data: {
          id: user.data.id,
          email: user.data.email,
          accessToken: expect.any(String),
          refreshToken: expect.any(String)
        },
        message: 'Successfully logged in User.'
      });
    });

    it('should throw invalid email or password', async () => {
      const response = await request(app)
        .post('/api/v1/login')
        .set('Accept', 'application/json')
        .send({
          email: 'email@dontexists.com',
          password: 'thereisnopassword'
        })
        .expect(404);

      // Assert
      expect(response.body).toMatchObject({
        status: 404,
        data: {
          info: 'Email or password you have entered is incorrect'
        },
        message: 'Error while logging in User.'
      });
    });

    it('should fail login user', async () => {
      await request(app)
        .post('/api/v1/login')
        .set('Accept', 'application/json')
        .send({
          email: '',
          password: ''
        })
        .expect(400);
    });
  });
  // Test User Sign Up
  describe('User Sign Up', () => {
    it('should sign up user', async () => {
      signupUser = await request(app)
        .post('/api/v1/signup')
        .set('Accept', 'application/json')
        .send({
          email: 'biswas.test12453@gmail.com',
          password: 'hello',
          firstName: 'test',
          lastName: 'user'
        })
        .expect(201);

      // Assert
      const user = await fetchById(signupUser.body.data.id);
      expect(signupUser.body).toMatchObject({
        status: 201,
        data: {
          id: user.data.id,
          email: user.data.email,
          firstName: user.data.firstName,
          lastName: user.data.lastName,
          accessToken: expect.any(String),
          refreshToken: expect.any(String)
        },
        message: 'Successfully created the User.'
      });
    });

    it('should return 500 error saying email already exists', async () => {
      let user: any;
      user = await request(app)
        .post('/api/v1/signup')
        .set('Accept', 'application/json')
        .send({
          email: 'biswas.test12453@gmail.com',
          password: 'hello',
          firstName: 'test',
          lastName: 'user'
        })
        .expect(500);

      // Assert
      expect(user.body).toMatchObject({
        status: 500,
        data: {
          info: 'Email already exists.'
        },
        message: 'Error while creating the User.'
      });
    });

    // Remove User
    describe('User Remove', () => {
      it('should remove user', async () => {
        let response: any;

        const userId: number = signupUser.body.data.id;
        response = await request(app)
          .delete(`/api/v1/users/${userId}`)
          .set('Authorization', `Bearer ${signupUser.body.data.accessToken}`)
          .set('Accept', 'application/json')
          .expect(200);
      });
    });
  });
});
