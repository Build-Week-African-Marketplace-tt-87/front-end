import React, { useEffect } from "react";
import { connect } from "react-redux";
import Preloader from "../layout/Preloader";
import Item from "./Item";
import PropTypes from "prop-types";
import { getItems } from "../../actions/itemActions";

const Items = ({ item: { items, loading }, getItems }) => {
  useEffect(() => {
    getItems();
    // eslint-disable-next-line
  }, []);

  if (loading || items === null) {
    return <Preloader />;
  }

  return (
    <div className='row'>
      <h4 className='center'>Items</h4>

      {!loading && items.length === 0 ? (
        <p className='center'>No items to show...</p>
      ) : (
        items.map((item) => <Item item={item} key={item.id} />)
      )}
    </div>
  );
};

Items.propTypes = {
  item: PropTypes.object.isRequired,
  getItems: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  item: state.item,
});

export default connect(mapStateToProps, { getItems })(Items);
