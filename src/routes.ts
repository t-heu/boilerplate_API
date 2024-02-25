import express from 'express';

const v1Router = express.Router();

v1Router.get('/users', (req, res, next) => {
  const { name, age } = req.query;
  res.json({ message: 'Busca e filtro implementados!' });
});

export default v1Router;