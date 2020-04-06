import React from "react";
const OpenSideBar = (props) => {
  return (
    <div>
      <img
        src="https://img.icons8.com/metro/26/000000/menu.png"
        alt="Menu Icon"
        onClick={props.sideDrawerHandler}
      />
    </div>
  );
};
export default OpenSideBar;
