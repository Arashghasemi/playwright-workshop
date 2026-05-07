const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// API endpoint for fruits
app.get('/api/v1/fruits', (req, res) => {
  res.json([
    { name: 'Apple', id: 1 },
    { name: 'Banana', id: 2 },
    { name: 'Cherry', id: 3 },
    { name: 'Dragonfruit', id: 4 },
  ]);
});

// Login API
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === 'password') {
    res.json({ success: true, user: 'admin' });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

app.listen(PORT, () => {
  console.log(`Demo app running at http://localhost:${PORT}`);
});
