const app = require("./src/app");
const { conn } = require("./src/db");


const PORT = 3001;
conn.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });
});
