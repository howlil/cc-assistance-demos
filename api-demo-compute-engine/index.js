const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

const readData = () => {
  const rawData = fs.readFileSync('data.json');
  return JSON.parse(rawData);
};

const writeData = (data) => {
  fs.writeFileSync('data.json', JSON.stringify(data, null, 2));
};

app.get('/',(req,res)=>{
  res.send("api is ready")
})

app.get('/todos', (req, res) => {
  const todos = readData();
  res.json(todos);
});

app.get('/todos/:id', (req, res) => {
  const todos = readData();
  const todo = todos.find(t => t.id === parseInt(req.params.id));

  if (!todo) {
    return res.status(404).send('Todo not found');
  }

  res.json(todo);
});

app.post('/todos', (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).send('Title and description are required');
  }

  const todos = readData();
  const newTodo = {
    id: todos.length ? todos[todos.length - 1].id + 1 : 1,
    title,
    description,
    completed: false
  };

  todos.push(newTodo);
  writeData(todos);

  res.status(201).json(newTodo);
});

app.put('/todos/:id', (req, res) => {
  const todos = readData();
  const todoIndex = todos.findIndex(t => t.id === parseInt(req.params.id));

  if (todoIndex === -1) {
    return res.status(404).send('Todo not found');
  }

  const { title, description, completed } = req.body;
  if (title) todos[todoIndex].title = title;
  if (description) todos[todoIndex].description = description;
  if (completed !== undefined) todos[todoIndex].completed = completed;

  writeData(todos);

  res.json(todos[todoIndex]);
});

app.delete('/todos/:id', (req, res) => {
  let todos = readData();
  const todoIndex = todos.findIndex(t => t.id === parseInt(req.params.id));

  if (todoIndex === -1) {
    return res.status(404).send('Todo not found');
  }

  todos = todos.filter(t => t.id !== parseInt(req.params.id));
  writeData(todos);

  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
