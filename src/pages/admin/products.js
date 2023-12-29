import Layout from "@/components/Layout/Layout";
import ProductTable from "@/components/ProductTable/ProductTable";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("/api/products").then((res) => {
      setProducts(res.data);
    });
  }, []);
  return (
    <>
      <Layout>
        <ProductTable data={products} />
      </Layout>
    </>
  );
}
