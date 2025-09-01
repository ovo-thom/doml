import { Inter } from "next/font/google";
import "./global.css";
import ClientOnlyAOS from "@/components/ClientOnlyAOS";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "DOML",
  description: "Ai marketing optimized reach",
  icons: {
    icon: "/cerveau-ai.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>
        <ClientOnlyAOS />
        {children}
      </body>
    </html>
  );
}
