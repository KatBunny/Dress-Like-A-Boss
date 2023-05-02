const express = require("express");

const userRoutes = express.Router();

const dbo = require("../db/conn");

const ObjectId = require('mongodb').ObjectId;

userRoutes.route("/record").get(function (req, res) {
    let db_connect =dbo.getDb("outfits");
    db_connect
    .collection("users")
    .find({})
    .toArray(funciton (err, result), {
        if (err) { throw err;
        res.json(result);
    }});
});

userRoutes.route("user/route/add").post(function (req, response) {
    let db_connect = dbo.getDb();
    let myobj = {
        bodytype: req.body.bodytype,
        style: req.body.style, 
        clothesoption: req.body.clothesoption,
    };
});
