import React from "react";
import { Grid, Typography, Paper, Card, CardActionArea, CardMedia, CardContent, CardActions, Button } from '@material-ui/core';

function Books(props) {
  return (

props.books.map((book, index) => {

        //authors
        let authors = book.volumeInfo.authors;
        //title
        let title = book.volumeInfo.title;
        //image
        let image = book.volumeInfo.imageLinks.smallThumbnail;
        //description
        let description = book.volumeInfo.description;
        //link
        let link = book.volumeInfo.previewLink;

        return (
            <Grid item sm={12}>
            <Paper className="paper">
                <Card key={index}>
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
                        <Button size="small" color="primary">
                            Save
                        </Button>
                        <Button size="small" color="primary">
                            Learn More
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
