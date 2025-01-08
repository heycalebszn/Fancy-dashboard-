import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fancy dashboard",
  description: "Created by Rapto | Caleb",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-roboto body">
        {children}
      </body>
    </html>
  );
}
