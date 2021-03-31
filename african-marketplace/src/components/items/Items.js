import React, { useEffect } from "react";
import { connect } from "react-redux";
import Preloader from "../layout/Preloader";
import Item from "./Item";
import PropTypes from 'prop-types'
import {getItems} from '../../actions/itemActions'


const Items = ({ item: { items, loading}, getItems }) => {
  

  useEffect(() => {
    getItems();
    // eslint-disable-next-line
  }, []);

  
  if (loading || items === null) {
    return <Preloader />;
  }

  return (
    <ul className='collection with-header'>
      <li className='collection-header'>
        <h4 className='center'>Items</h4>
      </li>
      {!loading && items.length === 0 ? (
        <p className='center'>No items to show...</p>
      ) : (
        items.map((item) => <Item item={item} key={item.id} />)
      )}
    </ul>
  );
};

Items.propTypes ={
    item: PropTypes.object.isRequired,
    getItems: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  item: state.item,
});

export default connect(mapStateToProps, { getItems })(Items);
