import React, { createRef } from "react";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";

const UploadBtn = ({ text,  getFile, btnType, icon }) => {
  const input = createRef();
  const triggerInput = () => {
    input.current.click();
  };

  const handleFile = (e) => {
    getFile(e.target.files);
  };

  const setbtn = () => {
    switch (btnType) {
      case "largeSquare": {
        return (
          <div onClick={triggerInput} className="btn-container">
            {icon}
          </div>
        );
      }
      case "square":{
          return (
            <div onClick={triggerInput} className="img-container">
            {icon}
          </div>
          )
      }

      default:
        return (
          <Button style={{width:150, margin: 10, height:30, backgroundColor:"#fdba3b", color:"#fff"}} onClick={triggerInput}>
            {text}
          </Button>
        );
    }
  };
  return (
    <>
      <input
        accept="image/*"
        style={{ display: "none" }}
        id="contained-button-file"
        multiple
        onChange={handleFile}
        type="file"
        ref={input}
      />
        {setbtn()}
    </>
  );
};

UploadBtn.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  fullWidth: PropTypes.bool,
  icon: PropTypes.element,
  getFile: PropTypes.func,
  btnType: PropTypes.string,
};
export default UploadBtn;
