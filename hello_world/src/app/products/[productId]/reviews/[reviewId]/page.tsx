import NotFound from "@/app/not-found";
import { notFound } from "next/navigation";

type paramsType = {
  params: {
    productId: string;
    reviewId: string;
  };
};
let getRandomInt = (count: number) => {
  let processedNumber = Math.floor(Math.random() * count);
  return processedNumber;
};
const page = ({ params }: paramsType) => {
  let { productId, reviewId } = params;
  if (reviewId.length > 10) {
    notFound();
  }
  let random = getRandomInt(10);
  if (random > 5) {
    throw new Error("This Error is thrown Intentionally");
  }
  return (
    <div>
      <h1>{random}</h1>
      <h1>
        Review of {productId} is {reviewId}
      </h1>
    </div>
  );
};

export default page;
