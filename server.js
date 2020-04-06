const express = require('express');
const next = require('next');

const routes = require('./routes');

(async () => {
    const app = next({
        dev: process.env.NODE_ENV !== 'production',
    });
    await app.prepare();

    const server = express();

    server.use(
        routes.getRequestHandler(app)
    );

    const port = process.env.PORT || 3000;

    server.listen(
        port,
        () => console.log(`> Ready on http://localhost:${port}`) // eslint-disable-line no-console
    );
})();
