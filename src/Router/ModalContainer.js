import React from "react";

const ModalContainer = (props) => {
  return (
    <div id="id01" className={`modal login-block`}>
      <div className="modal-content animate">
        <span
          onClick={() =>
            (document.getElementsByClassName("modal")[0].style.display = "none")
          }
          className="close"
          title="Close Modal"
        >
          &times;
        </span>
        {props.children}
      </div>
    </div>
  );
};

export default ModalContainer;
