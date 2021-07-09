import React from 'react';
import {Field, reduxForm} from 'redux-form';


const LoginForm = (props: any) => {

    return <div>
        
        <form onSubmit={props.handleSubmit}>
           <div>
                <Field placeholder={"Login"} name={'login'} component={'input'}/>   
            </div>
            <div>
                <Field placeholder={"Password"} name={'password'} component={'input'}/>
            </div> 
            <div>
                <Field component={'input'} name={'rememberMe'} type={'checkbox'}/> remember me
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

    // Call back passing to ReduxForm 
    const onSubmit = (formData: any) => {
        console.log(formData)
    }

    return <div>
        
        <h1>Login</h1>
            
            <LoginReduxForm onSubmit={onSubmit}/>

        </div>
}


export default Login;