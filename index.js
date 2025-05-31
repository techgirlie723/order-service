const express = require('express');
const app = express();
const port = 3002;

const orders = [
  { id: 101, userId: 1, item: 'Book' },
  { id: 102, userId: 1, item: 'Pen' },
  { id: 103, userId: 2, item: 'Notebook' }
];

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Order Service!');
});

// Get orders by userId
app.get('/orders/:userId', (req, res) => {
  const userId = parseInt(req.params.userId);
  const userOrders = orders.filter(order => order.userId === userId);
  res.json(userOrders);
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Order service is running on port ${port}`);
});
