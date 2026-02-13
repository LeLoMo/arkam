import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AR-KAM | Cloud & Data Consulting",
  description:
    "AR-KAM — Specialized Cloud & DevOps consultancy focused on the industrialization and intelligent automation of enterprise processes. Azure, OCI, Kubernetes, Terraform.",
  keywords: [
    "Cloud Consulting",
    "DevOps",
    "Azure",
    "OCI",
    "Kubernetes",
    "Terraform",
    "Data Intelligence",
    "AR-KAM",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
