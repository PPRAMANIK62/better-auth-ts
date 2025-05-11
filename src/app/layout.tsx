import "@/styles/globals.css";

import { type Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Geist } from "next/font/google";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Better Authy",
  description: "better-authy",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`} suppressHydrationWarning>
      <body>
        <Toaster />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
