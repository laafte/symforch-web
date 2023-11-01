import React from 'react';

// MUI
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

// Components
import Img from '../../components/Img';
import Concert from '../../components/Concert';

//import Copyright from '../../components/Copyright';
import Sponsors from '../../components/Sponsors';
import CONCERTS from '../../CONCERTS';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    content: {
      flexGrow: 1,
      height: 'auto',
      overflow: 'auto',
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    },
    fixedHeight: {
      height: 240,
    },
    img: {
        width: '100%',
        maxWidth: '100%',
    },
    canceled: {
        textDecoration: 'line-through'
    }
  }));

const ConcertView = () => {
    document.title = "Konserter";
    const classes = useStyles();
    const concerts = CONCERTS;
    const currentDate = new Date();
    

    return (
        <div className={classes.root}>
            <main className={classes.content}>
                <div>
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3} justifyContent='center'>
                        {concerts.map((concert) =>
                            <Grid item xs={12} md={8} lg={8}>
                                <Paper className={classes.paper}>
                                    {
                                        new Date(concert.iso8601) > currentDate
                                        ? 
                                        <div>
                                        <Typography component="p" variant="h4">
                                            Kommende konsert
                                        </Typography>
                                            <Concert 
                                            title={concert.title}
                                            banner={concert.banner}
                                            credit={concert.credit}
                                            when={concert.when}
                                            where={concert.where}
                                            conductor={concert.conductor}
                                            description={concert.description}
                                            tickets={concert.tickets}
                                        />
                                        </div>
                                        :
                                        <div>
                                            <Typography component="p" variant="h4">
                                                Tidligere konsert
                                            </Typography>
                                            <Concert 
                                                title={concert.title}
                                                banner={concert.banner}
                                                credit={concert.credit}
                                                when={concert.when}
                                                where={concert.where}
                                                conductor={concert.conductor}
                                                description={concert.description}
                                                tickets=""
                                            />
                                        </div>
                                    }       
                                </Paper>
                            </Grid>
                        )}
                    </Grid>
                    <Sponsors />
                </Container>
                </div>
            </main>
        </div>   
    );
};

export default ConcertView;