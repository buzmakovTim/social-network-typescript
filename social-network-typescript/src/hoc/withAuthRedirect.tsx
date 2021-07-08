import React from 'react';
import { Redirect } from 'react-router-dom';

// This is HOC  Higher-Order Component
// https://reactjs.org/docs/higher-order-components.html


//@ts-ignore
const withAuthRedirect = (Component) => {

    class RedirectComponent extends React.Component {

        render() {
            
            
            //@ts-ignore
            if(!this.props.isAuth) return <Redirect to='/login' /> 
            return <Component {...this.props} />
        }
    }

    return RedirectComponent;
}

export default withAuthRedirect;