import AdminDashbordLayout from "@/components/Layout/AdminDashbordLayout";
import Loading from "@/components/Loading/Loading";
import ProductTable from "@/components/ProductTable/ProductTable";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Products() {
  const [productInfo, setProductInfo] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get("/api/products").then((res) => {
      setProductInfo(res.data);
    });
    setLoading(false);
  }, []);

  return (
    <>
      <AdminDashbordLayout>
        {loading === true && <Loading />}
        <ProductTable data={productInfo} />
      </AdminDashbordLayout>
    </>
  );
}
