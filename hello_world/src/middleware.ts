import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

const middleware = (request: NextRequest) => {
  let response = NextResponse.next();
  let themePreference = request.cookies.get("theme");
  if (!themePreference) {
    console.log("theme saved");
    response.cookies.set("theme", "dark"); // You can set Cookies like this here
  }

  if (request.nextUrl.pathname === "/profile") {
    return NextResponse.redirect(new URL("/", request.url));
  }
  response.headers.set("AR7_Header", "Grilled_Chicken"); // You can set Custom Headers like this
  //   console.log("test");
  //   // return NextResponse.redirect(new URL("/", request.url));
  return response; // Response should be returned Everytime
};
// const config = {
//   matcher: "/profile",
// };
export { middleware };
