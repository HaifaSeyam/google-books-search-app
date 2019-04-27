require("dotenv").config();
const axios = require("axios");

module.exports = function(app) {

    app.post("/search", (req, res) => {
    
        axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=${req.body.title}&key=${process.env.GOOGLE_BOOKS_KEY}`
        ).then(response => {
                res.json(response.data.items)
            }
        ).catch(err => {
                res.json(err)
            }
        );
    });

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../client/build/index.html"));
        });
}