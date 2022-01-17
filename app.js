const express = require('express');

// INSTANCE OF AN EXPRESS APP
// ==========================
const app = express();

// REGISTER VIEW ENGINE
// ====================
app.set('view engine', 'ejs');
// app.set('views', 'myviews'); -< Change directory

// LISTEN FOR REQUESTS
// ===================
app.listen(3000);

app.get('/', (req, res) => {
    const blogs = [
        {title: 'LSD', snippet: 'Labrinth, Sia, Diplo'},
        {title: 'Cê', snippet: 'Caetano Veloso'},
        {title: 'Totya', snippet: 'Toufic Farroukh'},
    ]
    res.render('index', { title: 'Home', blogs: blogs});
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About'});
});

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create Blog'});
})

app.use((req, res) => {
    res.status(404).render('404', { title: '404'});
});




/* FIRST REQUESTS
   ==============

app.get('/', (req, res) => {
    // res.send('<p>Home Page</p>');
    res.sendFile('./views/index.html', {root: __dirname});
});

app.get('/about', (req, res) => {
    // res.send('<p>About Page</p>');
    res.sendFile('./views/about.html', {root: __dirname});
});


// REDIRECT
// ========
app.get('/about-us', (req, res) => {
    res.redirect('/about');
});

// DEFAULT 404 - FIRE MIDDLEWARE
// =============================
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', {root: __dirname});
});
*/