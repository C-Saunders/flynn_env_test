const koa = require('koa');
const app = new koa();
const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(JSON.stringify(process.env));
});
