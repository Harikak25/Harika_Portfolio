import { NextResponse } from "next/server";
import fs from "node:fs";
import path from "node:path";
export async function GET() {
  try {
    const certsDir = path.join(process.cwd(), "public", "certs");
    if (!fs.existsSync(certsDir)) return NextResponse.json({ files: [] });
    const files = fs.readdirSync(certsDir).filter(f => f.toLowerCase().endsWith(".pdf")).map(f => ({ name: f, href: `/certs/${f}` }));
    return NextResponse.json({ files });
  } catch { return NextResponse.json({ files: [] }); }
}
