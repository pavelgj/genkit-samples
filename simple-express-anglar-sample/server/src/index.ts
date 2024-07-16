import express from 'express';
const app = express();

interface Restaurant {
  name: string;
  description: string;
}

app.get('/restaurants', (req, res) => {
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

const port = parseInt(process.env.PORT || '3000');
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
