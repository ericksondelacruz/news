import moment from 'moment';
import React from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';
import useStyles from './style';

const Article = (props) => {
  const classes = useStyles();

  const { source, title, description, url, urlToImage, publishedAt } = props;

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={urlToImage}
          title={title}
        />
        <CardContent>
          <Typography variant="subtitle1">
            {title}
          </Typography>
          <Typography variant="caption" color="primary">
            {source && source.name}
          </Typography>
          <Typography variant="caption" color="textSecondary" paragraph>
            {moment(publishedAt).fromNow()}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
        <CardActions >
          <Button size="small" color="primary" onClick={() => window.open(url)}>
            Read More
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default Article;