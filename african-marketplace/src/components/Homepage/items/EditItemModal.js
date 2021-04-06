import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import M from "materialize-css/dist/js/materialize.min.js";
import PropTypes from "prop-types";
import { updateItem } from "../../../actions/itemActions";

const EditItemModal = ({ current, updateItem }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [quantity, setQuantity] = useState("");

  useEffect(() => {
    if (current) {
      setName(current.item_name);
      setDescription(current.description);

      setPrice(current.price);
      setLocation(current.location);
      setQuantity(current.quantity);
    }
  }, [current]);

  const onSubmit = () => {
    if (name === "" || price === "" || location === "" || quantity === "") {
      M.toast({ html: "Please fill out all fields" });
    } else {
      const updItem = {
        id: current.id,
        name,
        description,

        price,
        location,
        quantity,
      };
      updateItem(updItem);

      M.toast({ html: "Updated Item Information!" });
    }

    //Clear Fields
    setName("");
    setDescription("");

    setPrice("");
    setLocation("");
    setQuantity("");
  };

  return (
    <div id='edit-item-modal' className='modal' style={modalStyle}>
      <div className='modal-content'>
        <h4>Edit Item</h4>

        <div className='row'>
          <div className='input-field'>
            <h6>Name</h6>
            <input
              type='text'
              name='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <h6>Description</h6>
            <input
              type='text'
              name='description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <h6>Price</h6>
            <input
              type='text'
              name='price'
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <h6>Location</h6>
            <input
              type='text'
              name='location'
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <h6>Quantity</h6>
            <input
              type='text'
              name='quantity'
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
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

const modalStyle = {
  width: "75%",
  height: "75%",
};

EditItemModal.propTypes = {
  current: PropTypes.object,
  updateItem: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  current: state.item.current,
});

export default connect(mapStateToProps, { updateItem })(EditItemModal);
