'use client'

import { useEffect, useState } from 'react'

const NAV_ITEMS = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
]


export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 20)
        }

        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled
                ? 'bg-black/60 backdrop-blur-md border-b border-neutral-800'
                : 'bg-transparent'
            }`}
        >
            <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* Logo / Name */}
                <a
                    href="#"
                    className="text-sm font-medium text-white tracking-wide"
                >
                    AK
                </a>

                {/* Navigation + CTA */}
                <div className="hidden md:flex items-center gap-8">
                    {NAV_ITEMS.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="text-sm text-neutral-300 hover:text-white transition"
                        >
                            {item.label}
                        </a>
                    ))}

                    {/* CTA Button */}
                    <a
                        href="mailto:amankr20001@gmail.com?subject=Hiring%20Inquiry%20-%20Aman%20Kumar"
                        className="
              ml-4 inline-flex items-center justify-center
              rounded-full px-5 py-2 text-sm font-medium
              text-white
              bg-gradient-to-r from-purple-500 to-purple-600
              hover:from-purple-400 hover:to-purple-500
              transition-all duration-200
              shadow-lg shadow-purple-500/20
            "
                    >
                        Hire Me
                    </a>
                </div>
            </nav>
        </header>
    )
}
