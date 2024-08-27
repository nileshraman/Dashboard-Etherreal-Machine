import '../styles/globals.css'
import { ReactNode } from 'react'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
        <title>ETHEREAL MACHINES</title>
        <meta name="description" content="This is a default description for all pages." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      <body className="bg-[#212021] text-white">
        {children}
      </body>
    </html>
  )
}