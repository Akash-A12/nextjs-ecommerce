import AdminDashbordLayout from "@/components/Layout/AdminDashbordLayout";
import ProductForm from "@/components/ProductForm/ProductForm";
import React from "react";

export default function NewProducts() {
  return (
    <>
      <AdminDashbordLayout>
        <ProductForm />
      </AdminDashbordLayout>
    </>
  );
}
