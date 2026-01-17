"use client";

import { useState } from "react";
import { parseInvoiceMock } from "@/app/services/mockInvoiceParser";

export default function AddInvoiceModal({
  groupId,
  members,
  onClose,
  onSave,
}: any) {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [invoiceData, setInvoiceData] = useState<any>(null);
  const [paidBy, setPaidBy] = useState("");

  async function handleParse() {
    if (!file) return;
    setLoading(true);
    const data = await parseInvoiceMock(file);
    setInvoiceData(data);
    setLoading(false);
  }

  function handleSave() {
    const invoice = {
      id: "inv_" + Date.now(),
      groupId,
      vendor: invoiceData.vendor,
      date: invoiceData.date,
      totalAmount: invoiceData.totalAmount,
      items: invoiceData.items,
      paidBy,
      createdAt: new Date().toISOString(),
    };

    onSave(invoice);
    onClose();
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
      <div className="bg-white p-6 rounded w-full max-w-lg space-y-4">
        <h2 className="text-xl font-semibold">Add Invoice</h2>

        <input
          type="file"
          accept="image/*,.pdf"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
        />

        <button
          onClick={handleParse}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          {loading ? "Parsing..." : "Parse Invoice"}
        </button>

        {invoiceData && (
          <>
            <div>
              <p><strong>Vendor:</strong> {invoiceData.vendor}</p>
              <p><strong>Date:</strong> {invoiceData.date}</p>
              <p><strong>Total:</strong> ₹{invoiceData.totalAmount}</p>
            </div>

            <div>
              <strong>Items</strong>
              <ul className="list-disc pl-5">
                {invoiceData.items.map((item: any) => (
                  <li key={item.id}>
                    {item.name} × {item.quantity} — ₹{item.price}
                  </li>
                ))}
              </ul>
            </div>

            <select
              className="border p-2 w-full"
              value={paidBy}
              onChange={(e) => setPaidBy(e.target.value)}
            >
              <option value="">Paid by</option>
              {members.map((m: any) => (
                <option key={m.id} value={m.id}>{m.name}</option>
              ))}
            </select>

            <button
              onClick={handleSave}
              disabled={!paidBy}
              className="px-4 py-2 bg-green-600 text-white rounded w-full"
            >
              Save Invoice
            </button>
          </>
        )}
      </div>
    </div>
  );
}
