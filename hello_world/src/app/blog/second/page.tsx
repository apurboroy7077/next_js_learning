import React from "react";
import { Metadata } from "next";

const metadata: Metadata = {
  title: {
    absolute: "This is Blog",
  },
  description: "hello",
};
const Second = () => {
  return <div>Second</div>;
};
export { metadata };
export default Second;
