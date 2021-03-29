import React from "react";

const AddBtn = () => {
  return (
    <div className='fixed-action-btn'>
      <a
        href="#add-item-modal"
        className='btn-floating btn-large blue darken-2 modal-trigger'
      >
        <i className='large material-icons'>add</i>
      </a>
      {/* <ul>
        <li>
          <a
            href='#item-list-modal'
            className='btn-floating green modal-trigger'
          >
            <i className='material-icons'>food</i>
          </a>
        </li>
        <li>
          <a
            href='#item-modal'
            className='btn-floating red modal-trigger'
          >
            <i className='material-icons'>person_add</i>
          </a>
        </li>
      </ul> */}
    </div>
  );
};

export default AddBtn;
