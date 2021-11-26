const port = 8010;
const sqlite3 = require('sqlite3').verbose();

const buildSchemas = require('./src/schemas');

const db = new sqlite3.Database(':memory:');
const app = require('./src/app')(db);

db.serialize(() => {
  buildSchemas(db);
  app.listen(port, () => console.log(`App started and listening on port ${port}`));
});
