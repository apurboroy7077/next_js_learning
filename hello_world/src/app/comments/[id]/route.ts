import { comments } from "../data";
type propsType = {
  params: { id: string };
};
let GET = (request: Request, { params }: propsType) => {
  let comment = comments.find((comment) => comment.id == parseInt(params.id));
  return Response.json(comment);
};
let PATCH = async (request: Request, { params }: propsType) => {
  let body = await request.json();
  let { text } = body;
  let index = comments.findIndex(
    (comment) => comment.id === parseInt(params.id)
  );
  comments[index].text = text;
  return Response.json(comments[index]);
};
let DELETE = async (request: Request, { params }: propsType) => {
  let id = Number(params.id);
  let index = comments.findIndex((comment) => id == comment.id);
  let deletedComment = comments[index];
  comments.splice(index, 1);
  return Response.json(deletedComment);
};
export { GET, PATCH, DELETE };
