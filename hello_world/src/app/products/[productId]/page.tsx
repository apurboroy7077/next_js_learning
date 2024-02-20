import React from "react";
type paramsType = {
  params: {
    productId: string;
  };
};
const page = ({ params }: paramsType) => {
  return (
    <div>
      <h1>Details about product {params.productId}</h1>
    </div>
  );
};

export default page;
