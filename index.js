const app = require('koa')();

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(JSON.stringify(process.env))
});
