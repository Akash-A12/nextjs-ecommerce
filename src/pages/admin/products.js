import AdminDashbordLayout from "@/components/Layout/AdminDashbordLayout";
import ProductTable from "@/components/ProductTable/ProductTable";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Products() {
  const [productInfo, setProductInfo] = useState([]);

  useEffect(() => {
    axios.get("/api/products").then((res) => {
      setProductInfo(res.data);
    });
  }, []);

  return (
    <>
      <AdminDashbordLayout>
        <ProductTable data={productInfo} />
      </AdminDashbordLayout>
    </>
  );
}
