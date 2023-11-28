import express from 'express';
import path from 'path';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

// Define the absolute path to the 'public' folder
const publicPath = path.join(__dirname, '../public');

// Serve static files from the 'public' directory
app.use(express.static(publicPath));

// handling CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
