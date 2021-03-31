import React from "react";
import {connect} from 'react-redux'
import PropTypes from "prop-types";
import {deleteItem, setCurrent} from '../../actions/itemActions';

import M from 'materialize-css/dist/js/materialize.min.js'

const Item = ({ item, deleteItem, setCurrent }) => {
    const onDelete = () => {
        deleteItem(item.id)
        M.toast({html: 'Item Deleted'})
    }

  return (
    <li className='collection-item'>
      <div className='row'>
        <div className='col s12 m6'>
          <div className='card blue-grey darken-1'>
            <div className='card-content white-text'>
              <h5>{item.item_name}</h5>
              <p>
                <span className='grey-text'>Category:</span> {item.category}
              </p>
              <p>
                <span className='grey-text'>Description:</span>{" "}
                {item.description}
              </p>
              <p>
                <span className='grey-text'>Price:</span> {item.price}
              </p>
              <p>
                <span className='grey-text'>Market Location:</span>{" "}
                {item.location}
              </p>
              <p>
                <span className='grey-text'>In Stock:</span> {item.quantity}
              </p>
            </div>
            <div className='card-action'>
              <a href='#edit-item-modal' className='modal-trigger' onClick={()=> setCurrent(item)}>
                Edit
              </a>
              <a href='#!' onClick={onDelete}>delete</a>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

Item.propTypes = {
  item: PropTypes.object.isRequired,
  deleteItem: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired,
};

export default connect(null, {deleteItem, setCurrent})(Item);
