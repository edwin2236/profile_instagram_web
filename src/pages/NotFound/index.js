import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import IconError from '../../images/icon_error.png';


const useStyles = makeStyles({
    card: {
        minWidth: 275,
    },
});

export const NotFound = () => {
    const classes = useStyles();

    return (
        <>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Card className={classes.card} style={{ marginTop: "20px" }}>
                    <CardContent>
                        <Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="center"
                        >
                            <Grid item xs={12}>
                                <img src={IconError} alt="Success" width="85px" style={{ display: "block", margin: "auto" }} />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h5" align="center">404 Not found</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="inherit" align="center" style={{ display: "block" }}>La página que intentas solicitar no está en el servidor</Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        </>
    )
}