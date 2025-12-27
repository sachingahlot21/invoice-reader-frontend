// import { NextRequest, NextResponse } from "next/server";
// import fs from "fs";
// import path from "path";
// // @ts-ignore
// import { createWorker } from "tesseract.js-node";

// export const POST = async (req: NextRequest) => {
//   console.log("📌 Received request to /api/invoice/parse");

//   try {
//     // 1️⃣ Get uploaded file
//     const formData = await req.formData();
//     const file = formData.get("invoice") as File;
//     console.log("FormData received:", formData);
//     console.log("Received file:", file);

//     if (!file) {
//       return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
//     }

//     // 2️⃣ Save temporary file
//     const uploadsDir = path.join(process.cwd(), "uploads");
//     if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir);

//     const tempPath = path.join(uploadsDir, file.name);
//     const buffer = Buffer.from(await file.arrayBuffer());
//     fs.writeFileSync(tempPath, buffer);
//     console.log("✅ File saved to:", tempPath);

//     // 3️⃣ OCR using Node-compatible Tesseract
//     console.log("🔍 Starting OCR...");
//      const worker = (await createWorker()) as any;  // await createWorker

//     await worker.load();                       // load core
//     await worker.loadLanguages("eng");         // load language(s)
//     await worker.reinitialize("eng");          // init engine

//     const { data } = await worker.recognize(tempPath);  // recognize image
//     const ocrText = data.text;

//     console.log("✅ OCR completed. Extracted text:\n", ocrText);

//     await worker.terminate();                  // terminate worker
//     console.log("🗑️ Tesseract worker terminated");

//     // Delete temp file
//     fs.unlinkSync(tempPath);
//     console.log("🗑️ Temporary file deleted");

//     return NextResponse.json({ text: ocrText });
//   } catch (err: any) {
//     console.error("🔥 Error in /api/invoice/parse:", err);
//     return NextResponse.json({ error: err.message || "Server error" }, { status: 500 });
//   }
// };


import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    console.log("📩 /api/invoice/parse called");

    const formData = await req.formData();
    const file = formData.get("invoice");

    console.log("📦 FormData received");
    console.log("📄 Uploaded file:", file);

    if (!file) {
      return NextResponse.json(
        { error: "No file uploaded" },
        { status: 400 }
      );
    }

    console.log("✅ Skipping OCR – returning static ASDA items");

    // 🔒 STATIC RESPONSE (ASDA SAMPLE ITEMS)
    const items = [
      { name: "ASDA Semi Skimmed Milk 2L", quantity: 1, price: 2.15 },
      { name: "ASDA White Bread 800g", quantity: 1, price: 1.10 },
      { name: "ASDA Free Range Eggs (12)", quantity: 1, price: 3.25 },
      { name: "ASDA Bananas Loose", quantity: 6, price: 1.20 },
      { name: "ASDA Chicken Breast Fillets 1kg", quantity: 1, price: 6.50 },
      { name: "ASDA Greek Style Yogurt 500g", quantity: 1, price: 1.85 },
      { name: "ASDA Mature Cheddar 400g", quantity: 1, price: 3.00 },
      { name: "ASDA Salted Butter 250g", quantity: 1, price: 2.10 },
      { name: "ASDA Tomato Ketchup 460g", quantity: 1, price: 1.90 },
      { name: "ASDA Basmati Rice 5kg", quantity: 1, price: 9.75 },
      { name: "ASDA Fusilli Pasta 500g", quantity: 2, price: 1.60 },
      { name: "ASDA Olive Oil 1L", quantity: 1, price: 6.25 },
      { name: "ASDA Orange Juice 1L", quantity: 1, price: 2.30 },
      { name: "ASDA Apples Braeburn 6 Pack", quantity: 1, price: 2.80 },
      { name: "ASDA Bell Peppers 3 Pack", quantity: 1, price: 2.00 },
      { name: "ASDA Onions 3kg", quantity: 1, price: 2.40 },
      { name: "ASDA Frozen Chips 2kg", quantity: 1, price: 3.20 },
      { name: "ASDA Digestive Biscuits", quantity: 1, price: 1.50 },
      { name: "ASDA Chocolate Digestives", quantity: 1, price: 1.85 },
      { name: "ASDA Toilet Roll 9 Pack", quantity: 1, price: 6.75 }
    ];

    const total = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    console.log("🧾 Returning", items.length, "items");

    return NextResponse.json({
      store: "ASDA",
      currency: "GBP",
      items,
      total: total.toFixed(2)
    });

  } catch (err: any) {
    console.error("🔥 API Error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
