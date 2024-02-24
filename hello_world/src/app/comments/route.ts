import { comments } from "./data";

let GET = () => {
  return Response.json(comments);
};
let POST = async (request: Request) => {
  let comment = await request.json();
  let newComment = {
    id: comments.length + 1,
    text: comment.text,
  };
  comments.push(newComment);
  return new Response(JSON.stringify(newComment), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
};
export { GET, POST };
