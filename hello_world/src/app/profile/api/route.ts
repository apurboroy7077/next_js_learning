import { headers } from "next/headers";
import { NextRequest } from "next/server";

let GET = async (request: NextRequest) => {
  let requestHeaders = new Headers(request.headers);
  console.log(requestHeaders.get("Authorization"));
  let headerList = headers();
  console.log(headerList.get("Authorization"));
  return new Response("<h1>Profile API Data</h1>", {
    headers: {
      "Content-Type": "text/html",
    },
  });
};
export { GET };
