export default function ItemsTable({ items }: { items: any[] }) {
  if (!items || !items.length) return null;

  return (
    <table className="w-full mt-6 border">
      <thead>
        <tr className="bg-gray-100">
          <th className="border p-2">Item</th>
          <th className="border p-2">Qty</th>
          <th className="border p-2">Price</th>
          <th className="border p-2">Total</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, i) => (
          <tr key={i}>
            <td className="border p-2">{item.name}</td>
            <td className="border p-2">{item.quantity}</td>
            <td className="border p-2">{item.price}</td>
            <td className="border p-2">{item.total}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
