import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

function mapStateToProps(state) {
    return {
        navOpen: state.app.navOpen
    }
}

import { toggleNav, openNav, closeNav } from '../actions'
function mapDispatchToProps(dispatch) {
    return {
        onOpenNav: bindActionCreators(openNav, dispatch),
        onCloseNav: bindActionCreators(closeNav, dispatch),
        onToggleNav: bindActionCreators(toggleNav, dispatch),
    }
}

import Header from '../components/Header'

class HeaderContainer extends React.PureComponent {

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(
    HeaderContainer
)
