import type { Metadata } from "next"
import { Arapey, Miriam_Libre } from "next/font/google"
import "./globals.css"

const fontSans = Miriam_Libre({
  variable: "--font-sans",
  subsets: ["latin"],
})

const fontSerif = Arapey({
  variable: "--font-serif",
  weight: ["400"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Lionel Tzatzkin (elrumordelaluz)",
  description: "Lionel Tzatzkin personal website",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontSans.variable} ${fontSerif.variable} bg-highlight antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
