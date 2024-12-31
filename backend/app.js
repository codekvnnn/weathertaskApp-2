const express = require('express');
const cors = require('cors');
const weatherRoutes = require('./routes/weather');
const taskRoutes = require('./routes/tasks');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/weather', weatherRoutes);
app.use('/api/tasks', taskRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});