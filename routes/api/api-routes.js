require("dotenv").config();
const axios = require("axios");
const db = require("../../models");
const path = require("path");

module.exports = function(app) {

    app.post("/search/:title", (req, res) => {
    
        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + req.params.title).then(function(results){
            res.json(results.data)
        })
    });

    app.post("/saved/:id", (req, res) => {
        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + req.params.id).then(function(results){

        let image = results.data.items[0] && 
                    results.data.items[0].volumeInfo && 
                    results.data.items[0].volumeInfo.imageLinks && 
                    results.data.items[0].volumeInfo.imageLinks.smallThumbnail;

        const book = {
            title: results.data.items[0].volumeInfo.title,
            authors: results.data.items[0].volumeInfo.authors,
            description: results.data.items[0].volumeInfo.description,
            image: image,
            previewLink: results.data.items[0].volumeInfo.previewLink
        }

            db.Book.create(book)
            .then(function(results) {
                console.log("added to db")
                // console.log(results);
            })
            .catch(function(err) {
            console.log(err);
            });

                res.json(results.data)
            })
    });


    app.post("/saved", (req, res) => {
        
        return db.Book.find()
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
        
    });


    app.post("/delete/:id", (req, res) => {
        db.Book.findByIdAndDelete(req.params.id).then(
            (response) => {
                res.json(response);
            }
        ).catch(
            (err) => {
                rres.json(error);
            }
        );
            
    });

    app.get("*", (req, res) => {
        res.sendFile( "../client/build/index.html");
        });
}