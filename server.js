const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"))

const tables = [];
const waitlist = [];

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/table", function (req, res) {
    res.sendFile(path.join(__dirname, "table.html"));
});

app.get("/reservation", function (req, res) {
    res.sendFile(path.join(__dirname, "reservation.html"));
});

app.get("/api/reservations", function (req, res) {
    return res.json(tables);
});

app.get("/api/waitlist", function (req, res) {
    return res.json(waitlist);
});

app.post("/api/reservations", function (req, res) {
    const newReservation = req.body;

    if (tables.length < 5) {
        tables.push(newReservation)
        res.json(true);
    } else {
        waitlist.push(newReservation)
        res.json(false);
    }
    console.log("save table")


});

app.listen(PORT, function () {
    console.log("App listening on Port " + PORT)
});