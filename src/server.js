const app = require('./app')

app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});