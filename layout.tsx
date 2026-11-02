import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Guangzhou KM Trading Co., Ltd. | Sourcing & Trade",
  description:
    "Product sourcing, supplier verification, freight coordination, import-export support, and business tours connecting Ethiopian buyers with Chinese manufacturers.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
