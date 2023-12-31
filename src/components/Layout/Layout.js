import React from "react";

export default function Layout({ children }) {
  return (
    <div className="hidden lg:fixed lg:flex lg:flex-col w-full page-wrapper">
      {children}
    </div>
  );
}
