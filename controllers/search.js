const fetch = require("node-fetch");
const axios = require("axios");

exports.getSearch = (req, res, next) => {
    let searchKeyword = req.query.q;
    let url = "https://images-api.nasa.gov/search?q=";

    url = url + searchKeyword;
    console.log(url);

    axios
        .get(url)
        .then((response) => {
            const imageData = response.data.collection.items;
            res.setHeader("Content-Type", "application/json");
            res.send(JSON.stringify(imageData));
        })
        .catch((error) => {
            console.log(error);
        });
};
