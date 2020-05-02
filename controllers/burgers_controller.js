var express = require("express");

var router = express.Router();


var burger = require("../models/burger.js");
router.get("/", (req, res) => {
    burger.selectall((data) => {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/", (req, res) => {
    burger.insertone([
        "burger_name", "devoured"
    ], [
            req.body.burger_name, false
        ], () => {
            res.redirect("/");
        });
});

router.put("/:id", (req, res) => {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.updateone({
        devoured: req.body.devoured
    }, condition, () => {
        res.redirect("/");
    });
});

module.exports = router;



