import React, { useState } from "react";
import Draggable from "react-draggable";
import "../styles/contact.scss";
function Contact() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const handleDrag = (e, ui) => {
    setPosition({ x: ui.x, y: null });
  };

  return (
    <>
      <div className="container-fluid bg-default cl-box">
        <div className="row">
          <div className="col-md-12 d-flex justify-content-center">
            <Draggable
              axis="x"
              onStop={handleDrag}
              bound={{
                top: null,
                left: -100 + "%",
                right: 50,
                bottom: null,
              }}
              position={{ x: 0, y: 0 }}
              defaultPosition={{ x: 0, y: null }}
            >
              <div className="dragwrapper"></div>
            </Draggable>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
