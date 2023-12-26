import AdminDashboard from "@/components/AdminDashboard/AdminDashboard";
import Layout from "@/components/Layout/Layout";
import axios from "axios";
import React, { useState } from "react";

export default function NewProducts() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  async function  createProduct(event) {
    event.preventDefault();
    const data = {title,description,price};
    await axios.post('/api/products', data);
  }
  return (
    <>
      <Layout>
        <h1>New Product</h1>
        <form onSubmit={createProduct}>
          <div className="mt-2">
            <label>Product Name</label>
            <input
              type="text"
              name="product name"
              id="product-name"
              autoComplete="Product Name"
              className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="Product Name"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </div>
          <div className="mt-2">
            <label>Product Description</label>
            <textarea
              id="about"
              name="about"
              rows={3}
              className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              defaultValue={""}
              placeholder="Product Description"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </div>
          <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
            <label>Price</label>
            <input
              type="number"
              name="Price"
              id="price"
              autoComplete="Price"
              className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="Price"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
            />
          </div>
          <button
            type="submit"
            className='className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"'
          >
            Save
          </button>
        </form>
      </Layout>
    </>
  );
}
