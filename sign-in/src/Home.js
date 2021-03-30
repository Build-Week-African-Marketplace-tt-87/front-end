import './App.css';
import styled from 'styled-components';
import {Switch, Route, Link} from 'react-router-dom';
import SignUp from './Sign-up';
import App from './App';
import React from 'react';

const StyledHome = styled.div `

h1{
    margin: 30px;
    font-size: 45%;
    color: grey
    
    }

    p{
margin: 20px;
font-size: 25%;
color: grey


    }
`


const Home = () => {

    return (

<StyledHome>
<h1> African MarketPlace </h1>

<p> Enpowering small businesses owner, particualry women, to improve their businesses and economic opportunities to grow out of poverty.</p>

<Link style  = {{textDecoration: 'none'}} to  = '/Sign-Up' > <p>Sign Up</p> </Link>
<Link style  = {{textDecoration: 'none'}} to  = '/Sign-In' > <p>Sign In</p> </Link>

        <Switch>
        <Route  exact path = '/Sign-Up' component = {SignUp} />

        <Route  exact path = '/Sign-In' component = {App}  />

        {/* <Route exact path = '/' component = {Home} /> */}

        </Switch>

</StyledHome>

    )


}
 

export default Home;


