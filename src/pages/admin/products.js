import AdminDashboard from "@/components/AdminDashboard/AdminDashboard";
import Layout from "@/components/Layout/Layout";
import Link from "next/link";
import React from "react";

export default function products() {
  return (
    <>
      <Layout>
        <h1>Products Page</h1>
        <Link
          href={"/products/new"}
          className='className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"'
        >
          Add New Product
        </Link>
      </Layout>
    </>
  );
}
