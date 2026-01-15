export async function parseInvoiceMock(file: File) {
  console.log("📄 Mock parsing invoice:", file.name);

  // simulate delay like backend
  await new Promise((res) => setTimeout(res, 1500));

  return {
    vendor: "ASDA",
    date: "2025-01-10",
    totalAmount: 124.5,
    items: [
      { id: "i1", name: "Milk 2L", quantity: 1, price: 2.5 },
      { id: "i2", name: "Bread", quantity: 2, price: 3.0 },
      { id: "i3", name: "Eggs 12 pack", quantity: 1, price: 4.2 },
      { id: "i4", name: "Rice 5kg", quantity: 1, price: 12.0 },
      { id: "i5", name: "Chicken Breast", quantity: 2, price: 9.5 },
    ],
  };
}

/*
TODO (BACKEND):
POST /api/invoice/parse
- Accept image/pdf
- OCR via Tesseract / Vision API
- AI structuring
- Return same JSON format
*/
