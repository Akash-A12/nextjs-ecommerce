import AdminDashbordLayout from "@/components/Layout/AdminDashbordLayout";
import ProductForm from "@/components/ProductForm/ProductForm";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function EditProductPage() {
  const [productInfo, setProductInfo] = useState();
  const router = useRouter();
  const { editProductId } = router.query;
  useEffect(() => {
    if (!editProductId) {
      return;
    }
    axios.get("/api/products?editProductId=" + editProductId).then((res) => {
      setProductInfo(res.data);
    });
  }, [editProductId]);
  return (
    <>
      <AdminDashbordLayout>
        <ProductForm {...productInfo} />
      </AdminDashbordLayout>
    </>
  );
}
