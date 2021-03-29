import React from "react";
import PropTypes from "prop-types";

const AdminItem = ({ item }) => {
  return (
    <li className='collection-item'>
      <div>

        <div className="row">
    <div className="col s12 m6">
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <h5>{item.item_name}</h5>
          <p><span className='grey-text'>Category:</span> {item.category_id}</p>
          <p><span className='grey-text'>Description:</span> {item.description}</p>
          <p><span className='grey-text'>Price:</span> {item.price}</p>
          <p><span className='grey-text'>Market Location:</span> {item.location}</p>
          <p><span className='grey-text'>In Stock:</span> {item.quantity}</p>
        </div>
        <div className="card-action">
          <a href="#edit-item-modal" className='modal-trigger'>Edit</a>
          <a href='#!'>delete</a>
        </div>
      </div>
    </div>
  </div>
      </div>
    </li>
  );
};

AdminItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default AdminItem;
