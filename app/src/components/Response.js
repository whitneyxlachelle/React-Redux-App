import React from 'react';
import { connect } from 'react-redux';

import { getResponse } from "../store/actions";

import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: '40%',
        maxHeight: '100%',
        margin: 'auto',
    },
    button: {
        margin: 'auto',
        background: 'red',
        color: 'black',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
      }
});

const Response = (props) => {
    console.log(props)
    const classes = useStyles();

    if (props.isFetching) {
        return (
            <div className={classes.root}>
                <LinearProgress color="secondary" />
            </div>
        )
    }

    if (props.error) {
        return <h3>{props.error}</h3>;
    }

    return (
        <div>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={props.image.image}
                        title="Gif"
                    />
                    <CardContent>
                        {props.answer && !props.isFetching &&
                            <Typography gutterBottom variant="h5" component="h2">
                                {props.answer.answer}
                            </Typography>}
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button className={classes.button} size="large" color="primary" onClick={props.getResponse}>
                        Yes/No
        </Button>
                </CardActions>
            </Card>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        isFetching: state.isFetching,
        answer: state.answer,
        image: state.image,
        error: state.error
    }
}

export default connect
    (mapStateToProps,
        { getResponse }
    )(Response); 