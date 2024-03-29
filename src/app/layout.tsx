import { Header } from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { CartProvider } from '@/hooks/useCart'
import { ToastContainer } from 'react-toastify'
import Toast from './toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Container ☆ D.C',
  description: ''
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <CartProvider>
     
        <body className={`${inter.className} bg-zinc-900 text-white`}>
          <Toast />
          <Header />
          {children}
        </body>
      </CartProvider>
    </html>
  )
}
