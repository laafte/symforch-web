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
import UpcomingItem from '../../components/UpcomingItem';
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

    return (
        <div className={classes.root}>
            <main className={classes.content}>
                <div>
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={8} lg={8}>
                            <Paper className={classes.paper}>
                                <Typography component="p" variant="h4">
                                    Førstkommende konsert
                                </Typography>
                                <Typography component="p" variant="h5">
                                    Studentersamfundets Symfoniorkester
                                </Typography>
                                <Img source={'/banners/symforch_presenterer.jpg'} credit={"Foto: foto.samfundet.no"} alt={'Bannerplakat'} className={classes.img}/>
                                <Typography component="p" variant="body1">
                                    <b>Når: </b>28. oktober kl. 13:00<br />
                                    <b>Hvor: </b>Studentersamfundet<br />
                                    <b>Hva: </b>
                                    Bli med på en reise inn i filmverdenens magi med Studentersamfundets Symfoniorkester. 
                                    Under ledelse av dirigent Espen Andersen tar Symforch deg med på en følelsesladet reise gjennom uforglemmelige filmlydspor. 
                                    Fra hjertevarmende øyeblikk til episke scener, vil aftenen utvilsomt vekke minner og berøre ditt musikk- og filmhjerte. 
                                    Bli med og del denne stemningsfulle opplevelsen med oss!<br /><br />

                                    Dirigeres av Espen Andersen.<br /><br />

                                    <b>Billetter (UTSOLGT):</b> <a href="https://www.uka.no/program/858-symforch-presenterer/1222/">uka.no</a>
                                </Typography>             
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={8} lg={8}>
                            <Paper className={classes.paper}>
                                <Concert 
                                    title={concerts[0].title}
                                    banner={concerts[0].banner}
                                    credit={concerts[0].credit}
                                    when={concerts[0].when}
                                    where={concerts[0].where}
                                    conductor={concerts[0].conductor}
                                    description={concerts[0].description}
                                    tickets={concerts[0].tickets}
                                />           
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={4} lg={4}>
                            <Paper className={classes.paper}>
                                <Typography component="p" variant="h4">
                                    Kommende konserter
                                </Typography>
                                <br />
                                <UpcomingItem
                                    title={"Studentersamfundets Symfoniorkester"}
                                    date={"28. oktober kl. 13:00"}
                                    location={"Storsalen, Studentersamfundet"}
                                    tickets={"https://www.uka.no/program/858-symforch-presenterer/1222/"}
                                    ticket_text={"uka.no"}
                                />
                            </Paper>
                        </Grid>
                        {/* <Grid item lg={12} md={12} xs={12}>
                            <Paper className={classes.paper}>
                                <Typography component="p" variant="h4">
                                    Tidligere konserter
                                </Typography>
                                <Typography component="p" variant="h5">
                                    Festkonsert
                                </Typography>
                                <Img source={festkonsert_banner} alt={'Bannerplakat for festkonsert'} className={classes.img}/>
                                <Typography component="p" variant="body1">
                                    <b>Når: </b>6. oktober kl. 20:00<br />
                                    <b>Hvor: </b>Storsalen, Studentersamfundet<br />
                                    <b>Hva: </b>
                                    1910 startet en gruppe studenter og musikere i Trondheim sitt eget musikalorkester. 
                                    I løpet av tiden vokste vi, og ble fort et fullt symfoniorkester som har funnet 
                                    sitt hjem i Storsalen. I 2020 ble vi hele 110år! 
                                    Dette måtte vi selvfølgelig feire slik vi liker best: med en staselig festkonsert.<br /><br />
                                    
                                    Vi presenterte et variert program, med alt fra norsk folkemusikk til latin-amerikanske rytmer.<br /><br />
                                    
                                    <i>Opptak av konserten er lagt ut på <a href='https://youtu.be/OEVUkf47IPA'>YouTube</a>.</i>
                                </Typography>
                                <Video title={"festkonsert_yt_embed"}/>
                            </Paper>
                        </Grid> */}
                    </Grid>
                    <Sponsors />
                </Container>
                </div>
            </main>
        </div>   
    );
};

export default ConcertView;