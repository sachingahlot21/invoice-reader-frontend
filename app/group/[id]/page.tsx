"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function GroupDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const [group, setGroup] = useState<any>(null);

  useEffect(() => {
    // TODO: Replace with GET /api/groups/:id
    const userData = JSON.parse(localStorage.getItem("user") || "[]");
    const storedGroups = userData.groups;
    const foundGroup = storedGroups.find((g: any) => g.id === id);
    setGroup(foundGroup);
  }, [id]);

  if (!group) {
    return <p className="p-6">Group not found.</p>;
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">{group.name}</h1>
        <button
          onClick={() => router.back()}
          className="px-4 py-2 border rounded"
        >
          ← Back
        </button>
      </div>

      {/* Group Info */}
      <div className="border rounded p-4">
        <p><strong>Type:</strong> {group.type}</p>
        <p><strong>Members:</strong> {group.members.map((m: any) => m.name).join(", ")}</p>
      </div>

      {/* Actions */}
      <div className="flex gap-4">
        <button className="px-4 py-2 bg-blue-600 text-white rounded">
          ➕ Add Invoice
        </button>

        <button className="px-4 py-2 bg-green-600 text-white rounded">
          👥 Manage Members
        </button>

        <button className="px-4 py-2 bg-gray-600 text-white rounded">
          ⚙️ Manage Group
        </button>
      </div>

      {/* Invoices Section */}
      <div className="border rounded p-4">
        <h2 className="text-xl font-semibold mb-2">Invoices</h2>

        {group.expenses?.length > 0 ? (
          <ul className="space-y-2">
            {group.expenses.map((exp: any) => (
              <li key={exp.id} className="border p-2 rounded">
                <p><strong>{exp.description}</strong></p>
                <p>Amount: ₹{exp.amount}</p>
                <p>Paid by: {group.members.find((m: any) => m.id === exp.paidBy)?.name}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No invoices added yet.</p>
        )}
      </div>
    </div>
  );
}
