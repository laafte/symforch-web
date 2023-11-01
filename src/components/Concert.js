import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Img from '../components/Img';

const useStyles = makeStyles((theme) => ({
    img: {
        width: '100%',
        maxWidth: '100%',
    }
}));


const Concert = (props) => {
    const classes = useStyles();
    return (
        <div>
            <Typography component="p" variant="h5">
                {props.title}
            </Typography>
            <Img source={'/banners/' + props.banner} credit={props.credit} alt={'Promobilde'} className={classes.img}/>
            <Typography component="p" variant="body1">
                <b>Når: </b>{props.when}<br />
                <b>Hvor: </b>{props.where}<br />
                <b>Hva: </b>
                {props.description}
                <br /><br />

                Dirigent: {props.conductor}
                
                {
                    props.tickets == "" ? <div></div> : <div><br /><b>Billetter:</b> <a href={props.tickets}>{props.tickets}</a></div>
                }
            </Typography> 
        </div>
    )
}

export default Concert