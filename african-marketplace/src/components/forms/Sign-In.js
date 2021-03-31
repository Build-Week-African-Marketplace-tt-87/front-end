import './Sign-In.css';
import styled from 'styled-components';
import Form from './Form'
import {Switch, Route, Link} from 'react-router-dom'
import SignUp from './Sign-up'

const styledSignUp = styled.div `
h1 {
margin: 30px;
font-size: 45%;
color: grey
}`

function SignIn() {
  return (
    <div className="App">
    
      <styledSignUp>
      
        <button disabled > Main </button>
        <button disabled > About Us? </button>
        
        <h1>Sign In </h1>


      
        <Form/>

        <footer> 
        <h3> Don't have an account? Create </h3>

        <Link style  = {{textDecoration: 'none'}} to  = './Sign-Up' > <p>Sign Up</p> </Link>

        <Switch>
        <Route path = '/sign-up' component = {SignUp} />

        <Route path = '/'/>
        </Switch>
        </footer>

        </styledSignUp>
      

    </div>
  );
}

export default SignIn;
