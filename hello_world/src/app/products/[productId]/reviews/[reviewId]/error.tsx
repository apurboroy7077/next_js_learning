"use client";
type errorType = {
  error: Error;
};
let ErrorBoundary = ({ error }: errorType) => {
  return (
    <>
      <div>Error in Reviews</div>
      <div>{error.message}</div>
    </>
  );
};
export default ErrorBoundary;
