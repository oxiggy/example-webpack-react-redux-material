import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Header from '../components/Header'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

class IndexPage extends React.PureComponent {

    render() {
        const { classes }= this.props
        return (
            <React.Fragment>

                <Header/>
                <Container maxWidth={false} className={classes.root}>
                    <Typography variant="h1" variantMapping={{ h1:'h1' }} paragraph style={{ marginLeft:'-0.08em' }}>Example</Typography>
                    <Typography variant="body1" paragraph>Example</Typography>
                </Container>

            </React.Fragment>
        )
    }

}

const styles= (theme) => ({
    root: {
        flexGrow: 1,
        paddingTop: theme.spacing(4),
    },
})

export default withStyles(styles)(
    IndexPage
)
