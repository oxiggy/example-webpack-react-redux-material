import React from 'react'
import { withStyles } from '@material-ui/styles'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Typography from '@material-ui/core/Typography'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import Container from '@material-ui/core/Container'

class Header extends React.PureComponent {

    render() {
        const { classes, navOpen, onOpenNav, onCloseNav, onToggleNav }= this.props
        return (
            <React.Fragment>
                <AppBar position="static" color="secondary" elevation={0} className={classes.root}>
                    <Container maxWidth={false}>
                        <Toolbar disableGutters>
                            <IconButton
                                color="inherit"
                                edge="start"
                                aria-label="menu"
                                onClick={onToggleNav}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography className={classes.link} variant="h6" color="inherit">Example</Typography>
                            <div style={{ flexGrow:1 }}/>
                        </Toolbar>
                    </Container>
                </AppBar>
                <SwipeableDrawer
                    open={navOpen}
                    onOpen={onOpenNav}
                    onClose={onCloseNav}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <AppBar position="static" color="secondary" elevation={0} className={classes.root}>
                        <Toolbar>
                            <Typography className={classes.link} variant="h6" color="inherit">Example</Typography>
                        </Toolbar>
                    </AppBar>
                </SwipeableDrawer>
            </React.Fragment>
        )
    }

}

const styles= (theme) => ({
    root: {
        position: 'relative',
    },
    drawerPaper: {
        minWidth: 240,
    },
})

export default withStyles(styles)(
    Header
)
