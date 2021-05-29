import React from 'react';
import { AppStateType } from '../../redux/redux-store';
import Navbar from './Navbar';
import {connect} from 'react-redux';

let mapStateToProps = (state: AppStateType) => {

    return {
        friends: state.friendsPageSideBar
    }    
}

const NavbarContainer = connect(mapStateToProps)(Navbar)

export default NavbarContainer;

