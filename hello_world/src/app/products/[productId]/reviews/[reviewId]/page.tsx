type paramsType = {
  params: {
    productId: string;
    reviewId: string;
  };
};
const page = ({ params }: paramsType) => {
  let { productId, reviewId } = params;
  return (
    <div>
      <h1>
        Review of {productId} is {reviewId}
      </h1>
    </div>
  );
};

export default page;
