import axios from 'axios';
import React from 'react';
import { AppStateType } from '../../redux/redux-store';
import Header from './Header';
import {Dispatch} from 'redux'
import {connect} from 'react-redux';
import {getAuthUserData} from '../../redux/auth-reducer'
import { authAPI } from '../../api/api';




class HeaderContainerComponent extends React.Component<AuthorizeType>{


  componentDidMount(){
    //thunk          
      this.props.getAuthUserData()
    }


  render() {
      return (
        <Header {...this.props}/>
      )
  
  }
  
}
//Types
type MapStateToPropsType = {
    id: number | null,
    login: string | null,
    email: string | null,
    isAuth: boolean
}
type MapDispatchToPropsType = {
  getAuthUserData: () => void
} 

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    id: state.authorizing.id,
    login: state.authorizing.login,
    email: state.authorizing.email,
    isAuth: state.authorizing.isAuth,
  }
} 
// const mapsDispatchProps = (dispatch: Dispatch): MapDispatchToPropsType => {
//   return {
//     setUserData: (id: number, login: string, email: string) =>{
//       dispatch(setUserData(id, login, email))
//     }
//   }
// }

export type AuthorizeType = MapStateToPropsType & MapDispatchToPropsType

//type PropsType = RouteComponentProps<PathParamsType> & AuthorizeType

export const HeaderContainer = connect(mapStateToProps, {getAuthUserData})(HeaderContainerComponent);
