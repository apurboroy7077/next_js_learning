import { cookies, headers } from "next/headers";
import { NextRequest } from "next/server";

let GET = async (request: NextRequest) => {
  let requestHeaders = new Headers(request.headers);
  console.log(requestHeaders.get("Authorization"));
  let headerList = headers();
  console.log(headerList.get("Authorization"));

  cookies().set("resultsPerPage", "20"); // You can also set cookies like this
  console.log(cookies().get("resultsPerPage")); //this will console log the cookie named "resultsPerPage"
  let theme = request.cookies.get("theme"); // TO load any cookie if it is already there
  console.log(theme);
  return new Response("<h1>Profile API Data</h1>", {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": "theme=dark", // This Will Set the Cookie
    },
  });
};
export { GET };
