import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {Field, reduxForm} from 'redux-form';
import { login } from '../../redux/auth-reducer';
import { AppStateType } from '../../redux/redux-store';
import { Input } from '../Common/FormsControl/FormsControl';
import { required } from '../Common/Validator/validators';
import style from './Login.module.css';

const LoginForm = (props: any) => {

    const isAuth = useSelector<AppStateType, boolean>( state => state.authorizing.isAuth)
    // {isAuth && <Redirect to="/profile" />}

    return <div>
        
        {/* Redirect to Profile page as soon as login */}
        {isAuth && <Redirect to="/profile" />}  
        {/*  */}

        <form onSubmit={props.handleSubmit}>
           <div>
                <Field  placeholder={"Email"} 
                        name={'email'} 
                        component={Input}
                        validate={[required]}/>   
            </div>
            <div>
                <Field placeholder={"Password"} 
                       name={'password'} 
                       component={Input}
                       validate={[required]}
                       type={'password'}/>
            </div> 
            <div>
                <Field component={Input} 
                       name={'rememberMe'} 
                       type={'checkbox'}/> remember me
            </div>
            <div className={style.formSummaryError}>
                {props.error}
            </div>
            <div>
                <button>Login</button>
            </div>

        </form>
    </div>
}

// Creating form with kinda HOC reduxForm
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)



const Login = (props: any) => {
    
    //const isAuth = useSelector<AppStateType, boolean>( state => state.authorizing.isAuth)
    const dispatch = useDispatch()

    // Call back passing to ReduxForm 
    const onSubmit = (formData: any) => {
        // Here we need to send data to the server
        //console.log(formData.email, formData.password, formData.rememberMe);
        dispatch(login(formData.email, formData.password, formData.rememberMe))
    }

    return <div>
        
        <h1>Login</h1>
            
            <LoginReduxForm onSubmit={onSubmit}/>

        </div>
}


export default Login;