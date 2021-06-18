import axios from 'axios';
import React from 'react';
import { setUserDataAC } from '../../redux/auth-reducer';
import { AppStateType } from '../../redux/redux-store';
import Header from './Header';
import {Dispatch} from 'redux'
import {connect} from 'react-redux';
import { authorizedAPI } from '../../api/api';




class HeaderContainerComponent extends React.Component<AuthorizeType>{

  
  componentDidMount(){
    //If authorized Set userData
    authorizedAPI.ifAuthorized().then(data => {
                        
                  if(data.resultCode === 0) {
                    let {id, login, email} = data.data;
                   this.props.setUserData(id, login, email)
                  }
            })
    }


  render() {
      return (
        //@ts-ignore
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
  setUserData: (id: number, login: string, email: string) => void
} 

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    id: state.authorizing.id,
    login: state.authorizing.login,
    email: state.authorizing.email,
    isAuth: state.authorizing.isAuth,
  }
} 
const mapsDispatchProps = (dispatch: Dispatch): MapDispatchToPropsType => {
  return {
    setUserData: (id: number, login: string, email: string) =>{
      dispatch(setUserDataAC(id, login, email))
    }
  }
}

export type AuthorizeType = MapStateToPropsType & MapDispatchToPropsType

//type PropsType = RouteComponentProps<PathParamsType> & AuthorizeType

export const HeaderContainer = connect(mapStateToProps, mapsDispatchProps)(HeaderContainerComponent);
