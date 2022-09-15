import express from 'express';

const app = express();

//localhost:3333/ads

app.get('/ads', (request, response) => {

  return response.json([
  {id:1, name: 'John', email: 'john@example.com'},
  {id:2, name: 'John', email: 'john@example.com'},
  {id:3, name: 'John', email: 'john@example.com'},
  {id:4, name: 'John', email: 'john@example.com'},
  {id:5, name: 'John', email: 'john@example.com'},
  {id:6, name: 'John', email: 'john@example.com'},


  ])

})

app.listen(3333);