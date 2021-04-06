import React, { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import styled from "styled-components";
import Form from "../Form";
import SearchBar from "../../components/Homepage/layout/SearchBar";

import AddBtn from "./layout/AddBtn";


import Items from "./items/Items";
import AddItemModal from "./items/AddItemModal";
import EditItemModal from "./items/EditItemModal";

const Homepage = () => {
  
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });

  return (
      <div>
        <SearchBar />
      
        <div className='container'>
          <Items />
          <AddBtn />
          <AddItemModal />
          <EditItemModal />
        </div>
      </div>
  );
}

export default Homepage;
