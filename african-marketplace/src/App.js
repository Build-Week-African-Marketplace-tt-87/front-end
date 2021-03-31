import React, { useEffect, Fragment } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import styled from "styled-components";
import Form from "./components/forms/Form";
import { Switch, Route, Link } from "react-router-dom";
import SignUp from "./components/forms/Sign-up";
import { SearchBar } from "./components/layout/SearchBar";
import AdminHomePage from "./components/homePage/AdminHomePage";
import AddBtn from "./components/layout/AddBtn";
import AddItem from "./components/forms/AddOwnerItem";
import EditItemModal from "./components/forms/EditItemModal";
import {Provider} from 'react-redux';
import store from './store';

const styledSignUp = styled.div`
  h1 {
    margin: 30px;
    font-size: 45%;
    color: grey;
  }
`;

function App() {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });
  return (
    <Provider store={store}>
      <Fragment>
      <SearchBar />
      <styledSignUp>
      
        <button disabled > Main </button>
        <button disabled > About Us? </button>
        
        <h1>Sign In </h1>


      
        <Form />

        <footer> 
        <h3> Don't have an account? Create </h3>

        <Link style  = {{textDecoration: 'none'}} to  = './Sign-Up' > <p>Sign Up</p> </Link>

        <Switch>
        <Route path = '/sign-up' component = {SignUp} />

        <Route path = '/'/>
        </Switch>
        </footer>

        </styledSignUp>
      <div className='container'>

        <AddBtn />
        <AddItem />
        <EditItemModal />
        <AdminHomePage />
      </div>
      </Fragment>
    </Provider>
  );
}

export default App;
