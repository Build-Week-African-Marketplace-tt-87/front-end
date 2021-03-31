import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addItem } from "../../actions/itemActions";
import M from "materialize-css/dist/js/materialize.min.js";

const AddItemModal = ({ addItem }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [quantity, setQuantity] = useState("");

  const onSubmit = () => {
    if (
      name === "" ||
      category === "" ||
      price === "" ||
      location === "" ||
      quantity === ""
    ) {
      M.toast({ html: "Please fill out all fields" });
    } else {
      const newItem = {
        name,
        description,
        category,
        price,
        location,
        quantity,
      }

      addItem(newItem);

      M.toast({ html: "Item added succesfully!" });
    }

    //Clear Fields
    setName("");
    setDescription("");
    setCategory("");
    setPrice("");
    setLocation("");
    setQuantity("");
  };

  return (
    <div id='add-item-modal' className='modal' style={modalStyle}>
      <div className='modal-content'>
        <h4>Enter Item</h4>

        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor='name' className='active'>
              Name
            </label>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <label htmlFor='description' className='active'>
              Description
            </label>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='price'
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <label htmlFor='price' className='active'>
              Price
            </label>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='location'
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <label htmlFor='location' className='active'>
              Location
            </label>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='quantity'
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
            <label htmlFor='quantity' className='active'>
              Quantity
            </label>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <select
              name='category'
              value={category}
              className='browser-default'
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value='' disabled>
                Select Category
              </option>
              <option value='Animal Products'>Animal Products</option>
              <option value='Beans'>Beans</option>
              <option value='Cereals - Maize'>Cereals - Maize</option>
              <option value='Cereals- Other'>Cereals- Other</option>
              <option value='Cereals - Rice'>Cereals - Rice</option>
              <option value='Fruits'>Fruits</option>
              <option value='Peas'>Peas</option>
              <option value='Roots and Tubers'>Roots and Tubers</option>
              <option value='Seeds and Nuts'>Seeds and Nuts</option>
              <option value='Vegetables'>Vegetables</option>
              <option value='Other'>Other</option>
            </select>
          </div>
        </div>
      </div>

      <div className='modal-footer'>
        <a
          href='#!'
          onClick={onSubmit}
          className='modal-close waves-effect blue waves-light btn'
        >
          Enter
        </a>
      </div>
    </div>
  );
};

AddItemModal.propTypes = {
  addItem: PropTypes.func.isRequired,
};

const modalStyle = {
  width: "75%",
  height: "75%",
};

export default connect(null, {addItem})(AddItemModal);
