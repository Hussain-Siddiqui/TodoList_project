// "use client"s
import { Inter } from "next/font/google";
import "./globals.css";
import Parent from "./components/callbackfunction/Parent";
import Extra from "./components/Practice/Extra";
import Child from "./components/callbackfunction/Child";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Parent />
        <Child/>
        <Extra/>
      </body>
    </html>
  );
}
