const app = require('./src/app');

app.get('/', (req, res)=> {
    res.send("Hello World!");
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});
