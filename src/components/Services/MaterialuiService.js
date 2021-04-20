import React from 'react';
import "./Service.css";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginTop: "10px",
    boxShadow: "0 0 10px #463636",
  },
});

export default function MaterialuiService(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="180"
          image={props.img}
          title="Contemplative Reptile"
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.details}
          </Typography>
        </CardContent>

      </CardActionArea>

      <CardActions>
        <NavLink className="service-btn" to="/Contact" size="small" color="primary">
          Contact now
        </NavLink >
      </CardActions>
    </Card>
  );
}