"use client";

import { useState } from "react";
import InvoiceUploader from "@/app/components/InvoiceUploader";
import ItemsTable from "@/app/components/ItemsTable";

export default function UploadPage() {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleUpload = async (file: File) => {
    setLoading(true);
    setError("");
    setItems([]);

    try {
      const formData = new FormData();
      formData.append("invoice", file);

      console.log("1 Uploading file...");

      const res = await fetch("/api/invoice/parse", {
        method: "POST",
        body: formData,
      });

       console.log("2 Uploading file...");

      const data = await res.json();

       console.log("3 Uploading file...");
      console.log(data);
      //setItems(data.items || []);
    } catch (err) {
      setError("Failed to process invoice");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">
        Upload Invoice
      </h1>

      <InvoiceUploader onUpload={handleUpload} />

      {loading && (
        <p className="mt-4 text-blue-600">
          Reading invoice, please wait...
        </p>
      )}

      {error && (
        <p className="mt-4 text-red-600">{error}</p>
      )}

      <ItemsTable items={items} />
    </div>
  );
}
