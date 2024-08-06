import { Merriweather_Sans } from "next/font/google";
import "./globals.css";

const merriweatherSans = Merriweather_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Maverivk blog",
  description: "An amazing blogs from different people",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={merriweatherSans.className}>{children}</body>
    </html>
  );
}


