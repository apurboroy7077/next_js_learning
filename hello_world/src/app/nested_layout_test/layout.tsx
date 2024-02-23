import React from "react";

const NestedLayout = ({ children }) => {
  return (
    <>
      {children}
      <div>NestedLayout</div>
    </>
  );
};

export default NestedLayout;
