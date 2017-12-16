import * as express from 'express';
const path = require('path');

console.log('Revving up server');

const app: express.Express = express();
app.use(express.static(path.join(__dirname, '../dist-site')));

app.get('/*', (req: express.Request, res: express.Response) => {
  res.sendFile(path.join(__dirname, '../dist-site/index.html'));
});

console.log('Starting server');

const port = process.env.PORT || 3005;

app.listen(port, () => {
  console.log(`Server listening on port ${port}!`)
});
