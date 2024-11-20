import express from 'express';

// router imports
import routers from './router/v1/routers.js';

const app = express();
let server;

// server level middleware and routing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/blog', routers.blogRouter);
app.use('/event', routers.eventRouter);
app.use('/contact', routers.contactRouter);
app.use('/page', (req, res) => {
    res.send('testing');
})

function startServer(port) {
    return new Promise((resolve, reject) => {
        server = app.listen(port, () => {
            console.log(`Starting server.`);
            resolve();
        });
        server.on('error', reject);
    });
}

// Stop function
function stopServer() {
    return new Promise((resolve, reject) => {
        if (server) {
            server.close((error) => {
                if (error) return reject(error);
                console.log('Server stopped');
                resolve();
            });
        } else {
            resolve();
        }
    });
}

export { startServer, stopServer, app };