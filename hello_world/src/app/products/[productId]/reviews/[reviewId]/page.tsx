import NotFound from "@/app/not-found";
import { notFound } from "next/navigation";

type paramsType = {
  params: {
    productId: string;
    reviewId: string;
  };
};
const page = ({ params }: paramsType) => {
  let { productId, reviewId } = params;
  if (reviewId.length > 10) {
    notFound();
  }
  return (
    <div>
      <h1>
        Review of {productId} is {reviewId}
      </h1>
    </div>
  );
};

export default page;
