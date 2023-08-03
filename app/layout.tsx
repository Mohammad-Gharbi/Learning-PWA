import "./globals.css"
import type { Metadata } from "next"
import { Manrope } from "next/font/google"

import { ThemeProvider } from "@/components/theme-provider"

const manrope = Manrope({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "PWA",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={manrope.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
