import React from "react";
import { Grid, Typography, Paper, Card, CardActionArea, CardMedia, CardContent, CardActions, Button } from '@material-ui/core';

function SavedBooks(props) {

  return (

    props.books.map((book, index) => {

        let id = book._id;

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
                                            image={book.image}
                                            title=""
                                        />
                                    </Grid>
                                    <Grid item sm={10}>
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {book.title}
                                            </Typography>
                                            <Typography gutterBottom variant="h6" component="h2">
                                                {book.authors}
                                            </Typography>
                                            <Typography component="p">
                                                {book.description}
                                            </Typography>
                                        </CardContent>
                                    </Grid>
                                </Grid>
                            </CardActionArea>
                            <CardActions>
                                <Button onClick={() => props.deleteBook(id)} size="small" color="primary">
                                    Delete
                                </Button>
                                <Button size="small" color="primary" href={book.previewLink} target="_blank">
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

export default SavedBooks;
