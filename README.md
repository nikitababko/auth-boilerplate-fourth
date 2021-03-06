# MERN-Auth

[You can see screenshots of the messenger below](#screenshots)

## Install

1. `npm install` или `yarn install`
2. Delete `keys-example.env` file at `server/src/config/`.
3. Create `keys.env` file at `server/src/config/` and enter your values in it. More on this below.

   ```
   NODE_ENV=development
   PORT=
   MONGO_URI=
   CLIENT_URL=

   SECRET_OR_KEY=

   ```

4. Install MongoDB and start it.

5. Run command `npm run start` or `yarn start` on client and command `npm run dev` or `yarn dev` on server.

## Build with:

### Frontend

- axios
- classnames
- jwt-decode
- react-redux
- react-router-dom
- redux
- redux-thunk

### Backend

- NodeJS / Express
- Mongo / Mongoose
- Bcryptjs
- Dotenv
- Is-empty
- Jsonwebtoken
- Cors
- Morgan
- Passport
- Passport-jwt
- Validator

## Features

- Access protected pages only accessible to logged in users

## <a name="screenshots">Screenshots</a>

<div align="center">
  <h3 style="margin-top: 50px; font-size: 35px">Home</h3>
  <img src="screenshots/home.JPG" />

  <h3 style="margin-top: 100px; font-size: 35px"">Register</h3>
  <img src="screenshots/register.JPG" />

  <h3 style="margin-top: 100px; font-size: 35px"">Register validate</h3>
  <img src="screenshots/register-validate.JPG" />

  <h3 style="margin-top: 100px; font-size: 35px"">Login</h3>
  <img src="screenshots/login.JPG" />

  <h3 style="margin-top: 100px; font-size: 35px"">Login validate</h3>
  <img src="screenshots/login-validate.JPG" />
</div>
