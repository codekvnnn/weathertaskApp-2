let tasks = []; // In-memory task store

exports.getTasks = (req, res) => {
  res.json(tasks);
};

exports.createTask = (req, res) => {
  const { title, priority } = req.body;
  const newTask = { id: Date.now(), title, priority };
  tasks.push(newTask);
  res.status(201).json(newTask);
};