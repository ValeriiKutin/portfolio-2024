"use client";

import { ThemeProvider } from "next-themes";

export default function ProvidersTheme({ children }: any) {
  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      <div className="light:text-gray-700 dark:text-white dark:bg-gray-700 min-h-screen select-none transition-colors duration-300">
        {children}
      </div>
    </ThemeProvider>
  );
}
