
import NavBar from '@/components/NavBar';
import './globals.css';
import { Inter } from 'next/font/google';
import Footer from '@/components/Footer';
import { SetStateAction, useState } from 'react';
import NavBarMobile from '@/components/NavBarMobile';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Instituto UPAMA',
  description: 'Site do instituto UPAMA',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="pt">
      <head>
        <link rel="preconnect" href="https://rsms.me/"/>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"/>
      </head>
      <body className={inter.className}>
        <NavBarMobile/>
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
