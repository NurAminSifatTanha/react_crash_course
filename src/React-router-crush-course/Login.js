import React from 'react'
import Auth from './Auth'
import {Redirect} from 'react-router-dom'

class Login extends React.Component{
    state = {
        redirect:false
    };
    login=()=>{
        Auth.login(()=>{
            this.setState({redirect:true})
        })
    };
    render() {
        if (Auth.isLogIn) return <Redirect to='/'/>;
        let {from} = this.props.location.state || {from: {pathname:'/'}};
        if (this.state.redirect) return <Redirect to={from}/>
        return(
            <div>
                please Login...
                <button onClick={this.login}>Login</button>
            </div>
        )
    }
}
export default Login