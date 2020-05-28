import express from 'express';

const app = express();

app.get('/', (request, response) => response.json({ message: 'Hello Wo1rld' }));

app.listen(3333, () => {
  console.log('🚚 Server started on port 3333!');
});
