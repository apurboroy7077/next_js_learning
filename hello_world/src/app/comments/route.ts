import { NextRequest } from "next/server";
import { comments } from "./data";

type propsType = {
  params: { id: string };
};
let GET = (request: NextRequest) => {
  let searchParams = request.nextUrl.searchParams;
  let query = searchParams.get("query") as string;
  console.log(query);
  if (!query) {
    return Response.json(comments);
  } else {
    let filteredComments = comments.filter((comment) =>
      comment.text.includes(query)
    );
    return Response.json(filteredComments);
  }
};

export { GET };
