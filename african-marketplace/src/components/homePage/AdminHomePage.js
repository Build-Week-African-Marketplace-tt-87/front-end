import React, { useEffect } from "react";
import { connect } from "react-redux";
import AdminItem from "./AdminItem";
import Preloader from "../layout/Preloader";
import PropTypes from "prop-types";
import { getItems } from "../../actions/itemActions";

const AdminHomePage = ({ item: { items, loading }, getItems }) => {
  useEffect(() => {
    getItems();
    // eslint-disable-next-line
  }, []);

  if (loading || items === null) {
    return <Preloader />;
  }

  return (
    <ul className='collection with-header'>
      <li className='collection header'>
        <h4 className='center'>Items</h4>
        {!loading && items.length === 0 ? (
          <p className='center'>No items avaialable...</p>
        ) : (
          items.map((item) => (
            <ul>
              <AdminItem item={item} key={item.id} />
            </ul>
          ))
        )}
      </li>
    </ul>
  );
};

AdminHomePage.propTypes = {
  item: PropTypes.object.isRequired,
  getItems: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    item: state.item,
  };
};

export default connect(mapStateToProps, { getItems })(AdminHomePage);
