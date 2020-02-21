import React, { useState } from 'react'
import { Paper, TextField, FormControl, Grid, makeStyles, Typography, Button } from '@material-ui/core'
import { FakeAuth } from '../../../components/FakeAuth';
import { User } from '../../../api/User';


const useStyles = makeStyles({
    fullWith: {
        width: '100%',
    },
    fullHeight: {
        height: '100vh'
    },
    mt_20: {
        marginTop: 20
    },
    container: {
        minWidth: '500px',
        padding: '20px'
    }
});

export const SignIn = () => {
    let classes = useStyles()
    const [form, setForm] = useState({ email: "", password: "" })

    let handleOnChange = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    let handleSubmit = () => {
        User.login(form).then(response => {
            if (response.status === 200)
                FakeAuth.authenticate(response.data)
            else
                alert('Bad credentials.')
        })
    }

    return (
        <Grid container
            justify="center"
            alignItems="center"
            alignContent="center"
            className={classes.fullHeight}>
            <Paper elevation={3} className={classes.container}>
                <Typography variant="h4" align="center">Profile Instagram</Typography>
                <Grid item md={12} className={classes.mt_20}>
                    <FormControl className={classes.fullWith}>
                        <TextField
                            id="outlined-multiline-static"
                            label="Email"
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleOnChange}
                            variant="outlined" />
                    </FormControl>
                </Grid>
                <Grid item md={12} className={classes.mt_20}>
                    <FormControl className={classes.fullWith}>
                        <TextField
                            id="outlined-multiline-static"
                            label="Password"
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handleOnChange}
                            variant="outlined" />
                    </FormControl>
                </Grid>
                <Grid container
                    justify="center"
                    alignItems="center"
                    className={classes.mt_20}>
                    <Button
                        size="large"
                        variant="contained"
                        color="primary"
                        disableElevation
                        onClick={handleSubmit}>Sign In</Button>
                </Grid>
            </Paper>
        </Grid >
    )
}