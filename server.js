import express from 'express';
import bodyParser from 'body-parser';
import globalRouter from './src/routes/global.route.js';
import coursesRouter from './src/routes/courses.route.js';
import authRouter from './src/routes/auth.route.js';



const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);


// allow CORS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, Content-Length, X-Requested-With");
    next();
});

app.get('/', (req, res) => {
    res.json({ 'message': 'ok' });
})

app.use('/auth', authRouter);

app.use('/colleges', (req, res, next) => {
    req.tableName = "colleges";
    globalRouter(req, res, next);

});

app.use('/courses', (req, res, next) => {
    req.tableName = "courses";
    coursesRouter(req, res, next);
});

app.use('/departments', (req, res, next) => {
    req.tableName = "departments";
    globalRouter(req, res, next);
});

app.use('/teachers', (req, res, next) => {
    req.tableName = "teachers";
    globalRouter(req, res, next);

});

app.use('/users', (req, res, next) => {
    req.tableName = "users";
    globalRouter(req, res, next);

});


// app.use('/colleges', globalRouter);

/* Error handler middleware */
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({ 'message': err.message });

    return;
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Example app listening at http://localhost:${port}`)
});