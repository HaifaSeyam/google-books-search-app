require("dotenv").config();
const axios = require("axios");

module.exports = function(app) {

    app.get("/search", (req, res) => {
        // set bookTitle to the req.body.title with spaces replaced with plus signs(+)
        let bookTitle = req.body.title.replace(/\s/g, "+");
        
        axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=${bookTitle}&key=${process.env.GOOGLE_BOOKS_KEY}`
        ).then(response => {
                res.json(response.data.items)
            }
        ).catch(err => {
                res.json(err)
            }
        );
    });
}