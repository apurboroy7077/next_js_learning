"use client";
import ar7id from "ar7id";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./tailwind.css";
type propsType = {
  children: React.ReactNode;
};
let linkProperties = [
  {
    name: "Register",
    href: "/register",
  },
  {
    name: "Login",
    href: "/login",
  },
  {
    name: "Forgot Password",
    href: "/forgot_password",
  },
];
let AuthLayout = ({ children }: propsType) => {
  let pathName = usePathname();

  return (
    <>
      <div>Authentication First</div>
      <ol>
        {linkProperties.map((data) => {
          let isActive = pathName == data.href;

          return (
            <li key={ar7id()}>
              <Link
                href={data.href}
                className={`${isActive ? "text-[2rem]" : ""} `}
              >
                {data.name}
              </Link>
            </li>
          );
        })}
      </ol>
      {children}
    </>
  );
};

export default AuthLayout;
