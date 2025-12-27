"use client";

import { useState } from "react";

export default function InvoiceUploader({
  onUpload,
}: {
  onUpload: (file: File) => void;
}) {
  const [preview, setPreview] = useState<string | null>(null);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.[0]) return;

    const file = e.target.files[0];
    setPreview(URL.createObjectURL(file));
    onUpload(file);
  };

  return (
    <div className="border-2 border-dashed rounded-lg p-6 text-center">
      <input
        type="file"
        accept="image/*"
        id="invoice"
        className="hidden"
        onChange={handleFile}
      />

      <label htmlFor="invoice" className="cursor-pointer text-blue-600">
        Click to upload invoice
      </label>

      {preview && (
        <img
          src={preview}
          alt="Invoice"
          className="mt-4 max-h-64 mx-auto"
        />
      )}
    </div>
  );
}
