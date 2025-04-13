import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "DeepSeek",
  description: "Full Stack MERN project",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          suppressHydrationWarning className={`${inter.className} antialiased`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
