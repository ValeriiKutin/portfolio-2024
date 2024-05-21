import type { Metadata } from "next";
import "./globals.css";
import { NavBar } from "@/components/navbar/Navbar";
import { Providers } from "@/lib/features/Providers/Providers";
import { Cursor } from "@/components/custom-cursor/Cursor";
import ProvidersTheme from "./ProvidersTheme";
import { ToastContainer } from "react-toastify";

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
