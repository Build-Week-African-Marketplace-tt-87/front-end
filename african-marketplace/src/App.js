import React, { useEffect, Fragment } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import styled from "styled-components";
import Form from "./components/forms/Form";
import { Switch, Route, Link } from "react-router-dom";
import SignUp from "./components/forms/Sign-up";
import SearchBar  from "./components/layout/SearchBar";

import AddBtn from "./components/layout/AddBtn";

import {Provider} from 'react-redux';
import store from './store';
import Items from "./components/items/Items";
import AddItemModal from "./components/items/AddItemModal";
import EditItemModal from "./components/items/EditItemModal";

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
     
      <div className='container'>
        <Items />
        <AddBtn />
        <AddItemModal />
        <EditItemModal />


        {/* <AddItem />
        <EditItemModal /> */}
        
      </div>
      </Fragment>
    </Provider>
  );
}

export default App;
