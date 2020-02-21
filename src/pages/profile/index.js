import React from 'react'
import { Grid, Paper, Avatar, makeStyles, Typography, Link, Divider } from '@material-ui/core'

const useStyles = makeStyles({
    fullWith: {
        width: '100%',
    },
    fullHeight: {
        height: '100vh'
    },
    mt_20: {
        marginTop: 30,
        fontWeight: '600'
    },
    container: {
        minWidth: '500px',
        padding: '20px'
    },
    avatar: {
        width: 80,
        height: 80,
    }
});

export const Profile = () => {
    let classes = useStyles()

    return (
        <Grid container
            justify="center"
            className={classes.fullHeight}>
            <Paper elevation={1} className={classes.container}>
                <Avatar alt="Avatar"
                    className={classes.avatar}
                    src="https://avatars0.githubusercontent.com/u/20450718?v=4" />
                <Typography variant="h6" className={classes.mt_20}>Edwin Castaño</Typography>
                <Typography>Desarrollador de Software</Typography>
                <Link href="#">http://my-site-web.com</Link>
                <Divider style={{ margin: '20px -20px' }} />
                <div>
                    <Grid container
                        alignItems="center">
                        <Avatar alt="Avatar"
                            style={{ display: 'inline-block' }}
                            src="https://avatars0.githubusercontent.com/u/20450718?v=4" />
                        <Typography style={{ display: 'inline-block', marginLeft: 10 }}>Edwin Castaño</Typography>
                    </Grid>
                </div>
                <img
                    alt="avatar_publication"
                    height="400px"
                    style={{ margin: '5px -20px' }}
                    src="https://media.inquirer.com/storage/inquirer/projects/year-in-pictures-2019/photos/POY2019_RedC.JPG" />
            </Paper>
        </Grid>
    )
}