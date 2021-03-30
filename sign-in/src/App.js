import './App.css';
import styled from 'styled-components';
import Form from './Form'
import {Switch, Route, Link} from 'react-router-dom'
import SignUp from './Sign-up'
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
        
        <h1>Sign In </h1>


      
        <Form/>

        <footer> 
        <h3> Don't have an account? Create </h3>

        <Link style  = {{textDecoration: 'none'}} to  = '/Sign-Up' > <p>Sign Up</p> </Link>

        <Link style  = {{textDecoration: 'none'}} to  = '/Home' > <p> Home </p> </Link>

         <Switch> 
        <Route   path = '/Sign-Up' component = {SignUp} />

        <Route exact path = '/' component = {Home} />
        </Switch> 
        </footer>

        </styledSignUp>
      

    </div>
  );
}

export default App;
