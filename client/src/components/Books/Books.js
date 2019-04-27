import React from "react";
import { Grid, Typography, Paper, Card, CardActionArea, CardMedia, CardContent, CardActions, Button } from '@material-ui/core';

function Books(props) {

  return (

    props.books.map((book, index) => {
        // console.log(book)
        //author
        let authors = book.volumeInfo.authors;
        //title
        let title = book.volumeInfo.title;
        //image
        let image = book && book.volumeInfo && book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail;
        //description
        let description = book.volumeInfo.description;
        //link
        let link = book.volumeInfo.previewLink;
        //id
        let id = book.id;

            return (
                <Grid item sm={12} key={index}>
                    <Paper className="paper">
                        <Card>
                            <CardActionArea>
                                <Grid container>
                                    <Grid item sm={2}>
                                        <CardMedia
                                            component="img"
                                            alt=""
                                            height="140"
                                            image={image}
                                            title=""
                                        />
                                    </Grid>
                                    <Grid item sm={10}>
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {title}
                                            </Typography>
                                            <Typography gutterBottom variant="h6" component="h2">
                                                {authors}
                                            </Typography>
                                            <Typography component="p">
                                                {description}
                                            </Typography>
                                        </CardContent>
                                    </Grid>
                                </Grid>
                            </CardActionArea>
                            <CardActions>
                                <Button onClick={() => props.saveBook(book, id)} size="small" color="primary">
                                    Save
                                </Button>
                                <Button size="small" color="primary" href={link} target="_blank">
                                    Preview
                                </Button>
                            </CardActions>
                        </Card>
                    </Paper>
                </Grid>
            ) 

    })   
  );
}

export default Books;
