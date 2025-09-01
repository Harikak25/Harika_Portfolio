import type { Metadata } from "next";
import "./globals.css";
import Background from "@/components/mac/Background";
export const metadata: Metadata = { title: "HK Portfolio", description: "Mac-mock portfolio SPA" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body><Background />{children}</body></html>);
}
