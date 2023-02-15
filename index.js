const app = require("./src/app");
const { conn } = require("./src/db");


const port = process.env.PORT || 3001;
conn.sync().then(() => {
  app.listen(port, () => {
    console.log(`listening on port ${port}`);
  });
});
