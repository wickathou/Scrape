import { runScrape } from "@/lib/scape";

export async function POST(request: Request) {
  try {
    const { targetURL } = await request.json();

    const result = await runScrape(targetURL);

    return Response.json({ success: true, data: result });
  } catch (error) {
    console.error("Error during scraping:", error);
    return Response.json(
      { success: false, error: "Scraping failed" },
      { status: 500 }
    );
  }
}
