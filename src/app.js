const express = require('express');

const app = express();


//> Use format JSON
app.use(express.json());

//> >>DATABASE<<
const db = require('./utils/database');

db.authenticate()
    .then(() => console.log(`>> ** DB Authentication Succesfully ** <<`))
    .catch( err => console.log(err));

db.sync()
  .then(() => console.log('>> ** Database synced ** <<'))
  .catch(err => console.log(err));


//> MAIN SHOW
app.get("/", (req, res) => {
    res.status(201).json({
        STATUS_SERVER: "OK!!!",
        Main: "In process..."
    });
});

//> SERVER PORT USE
const PORT = 9000;
app.listen(PORT, () => {
    console.log(`SERVER STARTED ON PORT:${PORT}`);
});