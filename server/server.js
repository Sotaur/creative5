// Express Setup
const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('static'));

// Knex Setup
const env = process.env.NODE_ENV || 'development';
const config = require('../knexfile')[env];
const db = require('knex')(config);

app.get('/api/tickets', (req, res) => {
    db('tickets').select().from('tickets').then(tickets => {
        res.send(tickets);
    }).catch(error => {
        res.status(500).json({ error });
    });
});

app.post('/api/tickets', (req, res) => {
    db('tickets').insert({
        name: req.body.name,
        problem: req.body.description,
        priority: req.body.priority,
        created_at: new Date(),
        tags: req.body.tags,
        email: req.body.email,
        resolved: ''
    }).then(ticket => {
        res.status(200).json(ticket);
    }).catch(error => {
        console.log(error);
        res.status(500).json({ error });
    });
});

app.put('/api/tickets/:id', (req, res) => {
  let id = parseInt(req.params.id);
  db('tickets').where('id', id).update({resolved: req.body.resolved}).then(ticket => {
    res.sendStatus(200);
  }).catch(err => {
    console.log(err);
    res.sendStatus(500).json({err});
  })
});

app.delete('/api/tickets/:id', (req, res) => {
    let id = parseInt(req.params.id);
    db('tickets').where('id', id).del().then(tickets => {
        res.sendStatus(200);
    }).catch(error => {
        console.log(error);
        res.status(500).json({ error });
    });
});

// app.post('/api/tag', (req, res) => {
//
// });
//
// app.get('/api/tag', (req, res) => {
//
// });

app.post('/api/login', (req, res) => {
  db('users').where('email', req.body.email).then(users => {
    if (users.length && users[0].password == req.body.password) {
      console.log(users);
      res.send({
        id: users[0].id,
        email: users[0].email
      });
    } else {
      res.send({error: 'Invalid login'});
    }
  })
});

app.post('/api/user', (req, res) => {
  console.log(req.body);
  db('users').insert({
    email: req.body.email,
    password: req.body.password,
  }).then(user => {
    console.log('Registered: ', user);
    res.status(200).json({ id: user[0], email:req.body.email });
  }).catch(error => {
    console.log(error);
    res.status(500).json({ error });
  });
});

app.listen(3000, () => console.log('Server listening on port 3000!'));
