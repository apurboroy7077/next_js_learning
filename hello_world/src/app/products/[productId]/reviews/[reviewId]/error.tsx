"use client";
type errorType = {
  error: Error;
  reset: Function;
};
let ErrorBoundary = ({ error, reset }: errorType) => {
  return (
    <>
      <div>Error in Reviews</div>
      <div>{error.message}</div>
      <button onClick={reset()}>Try Again</button>
    </>
  );
};
export default ErrorBoundary;
