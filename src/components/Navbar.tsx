'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_ITEMS = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                scrolled || isOpen ? 'bg-black/80 backdrop-blur-lg border-b border-neutral-800' : 'bg-transparent'
            }`}
        >
            <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <a href="#" className="text-xl font-bold text-white tracking-tighter">AK</a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {NAV_ITEMS.map((item) => (
                        <a key={item.label} href={item.href} className="text-sm text-neutral-400 hover:text-white transition">
                            {item.label}
                        </a>
                    ))}
                    <a href="mailto:amankr20001@gmail.com" className="bg-purple-600 px-6 py-2 rounded-full text-sm font-bold hover:bg-purple-500 transition-all shadow-lg shadow-purple-500/20">
                        Hire Me
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white p-2">
                    <div className="w-6 h-5 flex flex-col justify-between">
                        <span className={`h-0.5 w-full bg-white transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                        <span className={`h-0.5 w-full bg-white transition-all ${isOpen ? 'opacity-0' : ''}`} />
                        <span className={`h-0.5 w-full bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                    </div>
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-black/95 border-b border-neutral-800 overflow-hidden"
                    >
                        <div className="flex flex-col p-8 gap-6">
                            {NAV_ITEMS.map((item) => (
                                <a key={item.label} href={item.href} onClick={() => setIsOpen(false)} className="text-2xl font-medium text-neutral-300">
                                    {item.label}
                                </a>
                            ))}
                            <a href="mailto:amankr20001@gmail.com" className="text-center bg-purple-600 py-4 rounded-2xl font-bold">
                                Hire Me
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}