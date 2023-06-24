
import { Inter } from 'next/font/google'
import React from "react";
import Providers from "@/app/providers";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Code Persona',
  description: 'Code Persona is an open-source initiative for generating AI coders proficient in a wide range of technology stacks and programming languages. It allows users to specify unique LLMs, define project requirements via files or prompts, and supports additional requirements post-generation. Code Persona also enables easy downloading of completed projects or synchronization with SCM systems.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
