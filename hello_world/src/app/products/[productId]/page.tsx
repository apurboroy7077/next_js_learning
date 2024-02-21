import React from "react";
import { setTimeout } from "timers/promises";
type paramsType = {
  params: {
    productId: string;
  };
};
let generateMetadata = ({ params }: paramsType) => {
  return {
    title: `Product ${params.productId}`,
  };
};
const page = ({ params }: paramsType) => {
  return (
    <div>
      <h1>Details about product {params.productId}</h1>
    </div>
  );
};

export { generateMetadata };
export default page;
