import React, { useRef } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { searchItems } from "../../actions/itemActions";

const SearchBar = ({ searchItems }) => {
  const text = useRef("");

  const onChange = e => {
    searchItems(text.current.value)
  }

  return (
    <nav style={{ marginBottom: "30px" }} className='blue'>
      <div className='nav-wrapper'>
        <form>
          <div className='input-field'>
            <input
              id='search'
              type='search'
              placeholder='Search Location...'
              ref={text}
              onChange={onChange}
              required
            />
            <label className='label-icon' htmlFor='search'>
              <i className='material-icons'>search</i>
            </label>
            <i className='material-icons'>close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

SearchBar.propTypes = {
  searchItems: PropTypes.func.isRequired,
};

export default connect(null, { searchItems })(SearchBar);
