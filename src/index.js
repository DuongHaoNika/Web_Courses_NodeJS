// import thu vien express
const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');
// tao app, express() la 1 function tra ve 1 object
const app = express();
const port = 3000;
const methodOverride = require('method-override')

const db = require('./config/db');

// Connect to db
db.connect();

const route = require('./routes');

app.use(methodOverride('_method'))

// kiem tra thu muc public voi phuong thuc static
app.use(express.static(path.join(__dirname, '/public')));

// su dung middleware cho form data(post)
app.use(express.urlencoded({ extended: true }));

// xu li du lieu voi code JS gui len
app.use(express.json());

// Template engine la handlebars
app.engine('hbs', engine({
    extname: '.hbs',
    helpers: {
        sum: (a, b) => a + b,
    }
}));

// set view engine la handlebars
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

route(app);

app.post('/search', (req, res) => {
    console.log(req.body);
    res.render('search');
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
