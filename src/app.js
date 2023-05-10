const express = require('express');

const app = express();

//> GET VARIABLES ENTORNO
const config = require('./config');

//>USE FORMAT JSON
app.use(express.json());

//> >>DATABASE<<
const db = require('./utils/database');
const initModels = require('./models/initModels')

db.authenticate()
    .then(() => console.log(`>> ** DB Authentication Succesfully ** <<`))
    .catch( err => console.log(err));

db.sync()
  .then(() => console.log('>> ** Database synced ** <<'))
  .catch(err => console.log(err));

initModels()

//> MAIN SHOW
app.get("/", (req, res) => {
    res.status(201).json({
        STATUS_SERVER: "OK!!!",
        Main: "In process..."
    });
});

//> SERVER PORT USE
const PORT = config.port;
app.listen(PORT, () => {
    console.log(`SERVER STARTED ON PORT:${PORT}`);
});