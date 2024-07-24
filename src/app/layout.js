import './globals.css'
import { Inter } from 'next/font/google'
import NoCodeView from './components/NoCodeView'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ayaan Sidky\'s Portfolio',
  description: 'Ayaan Sidky\'s Portfolio Website. Built with NextJS and Tailwind',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} oncontextmenu="return false;">
        <NoCodeView>
          {children}
        </NoCodeView>
      </body>
    </html>
  )
}
