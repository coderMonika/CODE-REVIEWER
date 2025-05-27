require('dotenv').config();
const app = require('./src/app.js');

console.log('Before starting server...');
app.listen(3000, () => {
  console.log('Server is running on port http://localhost:3000');
});

