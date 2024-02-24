import { comments } from "./data";

let GET = () => {
  return Response.json(comments);
};

export { GET };
