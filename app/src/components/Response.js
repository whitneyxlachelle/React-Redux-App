import React from 'react';
import { connect } from 'react-redux';

import { getResponse } from "../store/actions";

import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    root: {
        width: '50%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

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
                 {props.answer && !props.isFetching && <h2>{props.answer.answer}</h2>}
                 {props.image && !props.isFetching && <img src={props.image.image} alt="Your Answer" width="460" height="345"/>}
                
                <button onClick={props.getResponse}>Yes or No</button>
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