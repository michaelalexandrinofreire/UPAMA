
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
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap" rel="stylesheet"></link>
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
