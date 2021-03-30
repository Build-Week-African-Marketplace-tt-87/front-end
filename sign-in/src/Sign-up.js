import './App.css';
import styled from 'styled-components';
import Form from './Form'
import {Switch, Route, Link} from 'react-router-dom'
import SignIn from './App'
import Home from './Home'

const styledSignUp = styled.div `
h1{
margin: 30px;
font-size: 45%;
color: grey

}

`

function App() {
  return (
    <div className="App">
    
      <styledSignUp>
      
        
        <button disabled > About Us? </button>
        
        <h1>Sign Up </h1>


      
        <Form/>

        <footer> 
        <h3> Already have an account? Sign-In </h3>

        { <Link style  = {{textDecoration: 'none'}} to  = '/Sign-In' > <p>Sign In</p> </Link> }

        { <Link style  = {{textDecoration: 'none'}} to  = '/Home' > <p>Home </p> </Link> }
       
        { <Switch>
        <Route  exact path = '/app' component = {SignIn} />

        <Route exact path = '/' component = {Home} />
        
        </Switch> }

        </footer>

        </styledSignUp>
      

    </div>
  );
}

export default App;
