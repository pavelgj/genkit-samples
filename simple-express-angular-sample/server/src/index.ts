import express from 'express';
const app = express();

interface Restaurant {
  name: string;
  description: string;
}

const UI_ASSETS_SERVE_PATH = '../angular-app/dist/angular-app/browser';

app.use(express.static(UI_ASSETS_SERVE_PATH));

app.get('/api/restaurants', (req, res) => {
  const name = process.env.NAME || 'World';
  res.send({
    restaurants: [
      {
        name: 'Blue Fin',
        description: 'Best seafood in town',
      }
    ] as Restaurant[]
  });
});

// serve angular paths
app.all('*', (req, res) => {
  res.status(200).sendFile('/', { root: UI_ASSETS_SERVE_PATH });
});

const port = parseInt(process.env.PORT || '3000');
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
