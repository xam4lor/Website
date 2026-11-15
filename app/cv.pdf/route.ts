import { renderCv } from "@/scripts/cv/document";

// Daily regeneration keeps the computed age current.
export const revalidate = 86400;

export async function GET() {
    const pdf = await renderCv();
    return new Response(new Uint8Array(pdf), {
        headers: {
            "Content-Type": "application/pdf",
            "Content-Disposition": 'inline; filename="cv.pdf"',
        },
    });
}
