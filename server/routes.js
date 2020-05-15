const nextRoutes = require('next-routes');
const routes = nextRoutes();

routes.add('index', '/');
routes.add('login', '/login');

module.exports = routes;
