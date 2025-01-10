import type { Metadata } from "next";
import "./globals.css";
import { NavBar } from "@/components/navbar/Navbar";
import { Providers } from "@/lib/features/Providers/Providers";
import { Cursor } from "@/components/custom-cursor/Cursor";
import ProvidersTheme from "./ProvidersTheme";
import { ToastContainer } from "react-toastify";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Valerii Kut",
  description: "portfolio site made by Valerii Kut",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en" suppressHydrationWarning={true}>
        <meta name="freelancehunt" content="c42defec0c705e7" />
        <body>
          <ProvidersTheme>
            <NavBar />
            {children}
            <Cursor />
            <ToastContainer />
          </ProvidersTheme>
        </body>
      </html>
    </Providers>
  );
}
