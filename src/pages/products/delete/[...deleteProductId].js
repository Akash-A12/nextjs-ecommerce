import AdminDashbordLayout from "@/components/Layout/AdminDashbordLayout";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function DeleteProductPage() {
  const [product, setProduct] = useState();
  const router = useRouter();
  const { deleteProductId } = router.query;
  useEffect(() => {
    if (!deleteProductId) {
      return;
    }
    axios.get("/api/products?editProductId=" + deleteProductId).then((res) => {
      setProduct(res.data);
    });
  }, [deleteProductId]);

  function goBack() {
    router.push("/admin/products");
  }

  async function deleteProduct() {
    await axios.delete("/api/products?editProductId=" + deleteProductId);
    router.push("/admin/products");
  }
  return (
    <>
      <AdminDashbordLayout>
        <div className="delete-content-wrapper">
          <h1>Do you realy want to delete {product?.title} ?</h1>
          <div className="button-wrapper">
            <button
              onClick={deleteProduct}
              class="bg-red-600 hover:text-red-600 hover:bg-white text-white font-bold py-2 px-8 rounded mr-3"
            >
              Yes
            </button>
            <button
              onClick={goBack}
              class="bg-indigo-600 hover:text-indigo-900 hover:bg-white text-white font-bold py-2 px-8 rounded"
            >
              No
            </button>
          </div>
        </div>
      </AdminDashbordLayout>
    </>
  );
}
