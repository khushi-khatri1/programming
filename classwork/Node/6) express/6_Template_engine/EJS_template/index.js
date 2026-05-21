const express = require('express');
const app = express();

const path = require('path');
var publicpath = path.join(__dirname, 'public');

app.set('view engine', 'ejs');

app.get('/', (_, resp) => {
    resp.render(`${publicpath}/dashboard`);
     
})

app.get('/manage_blog', (_, resp) => {

    var blogs = [
        {
            title: 'Laravel Basics',
            author: 'Nirav',
            category: 'Beach',
            status: 'Published',
            image: 'src/beach.jpg' 
        },
        {
            title: 'React Guide',
            author: 'Rajesh',
            category: 'Mountain',
            status: 'Draft',
            image: 'src/mountain.jpg'
        }
    ];
    resp.render(`${publicpath}/manage_blog`,{blogs});
})

app.get('/manage_contact', (_, resp) => {

    var contacts = [
        {
            name: 'Rahul',
            email: 'rahul@test.com',
            subject: 'Support',
            message: 'Need help with login'
        },
        {
            name: 'Priya',
            email: 'priya@test.com',
            subject: 'Query',
            message: 'Pricing details please'
        }
    ];
    resp.render(`${publicpath}/manage_contact`,{contacts});
})

app.get('/manage_employee', (_, resp) => {

    var employees = [
        {
            name: 'Amit',
            email: 'amit@test.com',
            department: 'IT',
            salary: 30000
        },
        {
            name: 'Sneha',
            email: 'sneha@test.com',
            department: 'HR',
            salary: 25000
        }
    ];
    resp.render(`${publicpath}/manage_employee`,{employees});
})

app.get('/manage_user', (_, resp) => {

    var users = [
        {
            name: 'Nirav',
            email: 'nirav@test.com',
            role: 'Admin',
            status: 'Active'
        },
        {
            name: 'Rajesh',
            email: 'rajesh@test.com',
            role: 'User',
            status: 'Inactive'
        }
    ];
    resp.render(`${publicpath}/manage_user`,{users});
})

app.get('/test', (req, res) => {
    res.send('<img src="/beach.jpg" width="200">');
});

app.listen(2006);



