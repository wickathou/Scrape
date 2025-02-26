import { extractDataFromHTML } from "@/lib/ai";


export async function POST(request: Request) {
  try {
    const { htmlData } = await request.json();

    const result = await extractDataFromHTML(htmlData);

    return Response.json({ success: true, data: result });
  } catch (error) {
    console.error("Error during data extraction:", error);
    return Response.json(
      { success: false, error: "Extraction failed" },
      { status: 500 }
    );
  }
}
