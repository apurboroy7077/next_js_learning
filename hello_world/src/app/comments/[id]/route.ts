import { comments } from "../data";
type propsType = {
  params: { id: string };
};
let GET = (request: Request, { params }: propsType) => {
  let comment = comments.find((comment) => comment.id == parseInt(params.id));
  return Response.json(comment);
};

export { GET };
