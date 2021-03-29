import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import M from "materialize-css/dist/js/materialize.min.js";
import { addItem } from "../../actions/itemActions";

const AddOwnerItem = ({ addItem }) => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const onSubmit = () => {
    if (name === "" || price === "" || category === "" || location === "") {
      M.toast({ html: "Please complete all fields" });
    } else {
      const newItem = {
        name,
        quantity,
        price,
        category,
        location,
        description,
      };

      console.log(newItem)

      addItem(newItem);

      M.toast({ html: "Item added succesfully!" });

      //Clear fields
      setName("");
      setPrice("");
      setCategory("");
      setQuantity("");
      setLocation("");
      setDescription("");
    }
  };
  return (
    <div id='add-item-modal' className='modal' style={modalStyle}>
      <div className='modal-content'>
        <h4>Item Form</h4>

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
              name='description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <label htmlFor='descirption' className='active'>
              Description
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
              <option value='animal products'>Animal Products</option>
              <option value='beans'>Beans</option>
              <option value='cereals-maize'>Cereals-Maize</option>
              <option value='cereals-rice'>Cereals-rice</option>
              <option value='cereals-other'>Cereals-other</option>
              <option value='fruits'>Fruits</option>
              <option value='peas'>Peas</option>
              <option value='roots-tubers'>Roots & Tubers</option>
              <option value='seeds-nuts'>Seeds & Nuts</option>
              <option value='vegetables'>Vegetables</option>
              <option value='others'>Others</option>
            </select>
          </div>
        </div>
      </div>
      <div className='modal-footer'>
        <a
          href='#!'
          onClick={onSubmit}
          className='modal-close waves-effect blue waves-light btn '
        >
          Enter
        </a>
      </div>
    </div>
  );
};

AddOwnerItem.propTypes = {
  addItem: PropTypes.func.isRequired,
};

const modalStyle = {
  width: "75%",
  height: "75%",
};

export default connect(null, { addItem })(AddOwnerItem);
