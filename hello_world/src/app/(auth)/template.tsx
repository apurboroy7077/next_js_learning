"use client";
import ar7id from "ar7id";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./tailwind.css";
import { useState } from "react";
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
  let [input, setInput] = useState("");
  return (
    <>
      <div>Authentication First</div>
      <input
        className=" border-black border-[2px]"
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
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
