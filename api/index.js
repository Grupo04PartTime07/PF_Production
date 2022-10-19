const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const Categories = require('./src/models/Categories.js');
import { PORT } from ('./src/config');



conn.sync({ alter:true }).then(() => {
  server.listen(PORT, () => {
    console.log('** Listening at 3001**');
  });
});
