// Load controllers
const UserController = require('../controllers/UserController');

const createRoutes = (app) => {
  app.post('/api/users/register', UserController.register);
  app.post('/api/users/login', UserController.login);
};

module.exports = createRoutes;
