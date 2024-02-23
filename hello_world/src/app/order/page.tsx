"use client";

import { useRouter } from "next/navigation";

const page = () => {
  let router = useRouter();
  let handleClick = () => {
    router.push("/");
  };

  return (
    <>
      <div>Order Product</div>
      <button onClick={handleClick}>Place Order</button>
      <button
        onClick={() => {
          router.replace("/");
        }}
      >
        Replace
      </button>
      <button
        onClick={() => {
          router.back();
        }}
      >
        Previous Page
      </button>
      <button
        onClick={() => {
          router.forward();
        }}
      >
        Next Page
      </button>
    </>
  );
};

export default page;
