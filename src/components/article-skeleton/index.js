import React from 'react';
import { Box, Card, CardActions, CardContent, CardMedia, Grid } from '@material-ui/core';
import useStyles from './style';
import './style.css';

const ArticleSkeleton = () => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={`${classes.root} preloader`}>
        <CardMedia
          className={classes.image}
        />
        <CardContent>
          <div className={classes.text20}></div>
          <div className={classes.text20}></div>
          <div className={classes.text15}></div>
          <div className={classes.text15}></div>
          <div className={classes.space}></div>
          <div className={classes.text20}></div>
          <div className={classes.text20}></div>
          <div className={classes.text20}></div>
          <div className={classes.text20}></div>
        </CardContent>
        <CardActions >
          <Box></Box>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default ArticleSkeleton;