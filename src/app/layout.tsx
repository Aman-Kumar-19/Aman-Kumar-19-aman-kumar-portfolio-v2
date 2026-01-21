// src/app/layout.tsx
import './globals.css'
import Navbar from '@/components/Navbar'

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className="bg-[#050505] text-neutral-100 antialiased" suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
        </body>
        </html>
    )
}