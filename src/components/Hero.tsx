'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

const ThreeWrapper = dynamic(() => import('./ThreeWrapper'), {
    ssr: false,
    loading: () => <div className="w-full h-full bg-blue-500/5 animate-pulse rounded-[2.5rem]" />
})

export default function Hero() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return <div className="h-screen bg-[#050505]" />

    return (
        <section className="min-h-screen w-full bg-[#050505] pt-24 md:pt-32 pb-12 px-4 md:px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-6">

                {/* 1. MAIN IDENTITY - Expands to full width on mobile/tablet */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="col-span-1 md:col-span-2 lg:col-span-8 bg-neutral-900/40 border border-neutral-800 rounded-[2.5rem] p-8 md:p-12 flex flex-col justify-between backdrop-blur-md"
                >
                    <div>
                        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter leading-[0.9]">
                            Aman <span className="text-neutral-600 font-light italic">Kumar</span>
                        </h1>
                        <p className="mt-6 md:mt-8 text-lg md:text-xl lg:text-2xl text-neutral-400 max-w-xl leading-relaxed">
                            Engineering <span className="text-white font-semibold">intelligent IoT systems</span>. Specializing in embedded architectures and real-time systems.
                        </p>
                    </div>

                    <div className="mt-10 flex flex-col sm:flex-row gap-4">
                        <a href="#projects" className="w-full sm:w-auto text-center px-10 py-4 bg-white text-black rounded-2xl font-bold hover:bg-blue-600 hover:text-white transition-all">
                            View Roadmap
                        </a>
                        <div className="flex items-center justify-center gap-4 px-6 py-4 bg-neutral-800/50 rounded-2xl border border-neutral-700/50">
                            <span className="text-xs font-mono text-neutral-400 uppercase">Python // RTOS // IoT</span>
                        </div>
                    </div>
                </motion.div>

                {/* 2. 3D VISUALIZATION - HIDDEN ON MOBILE, VISIBLE ON DESKTOP */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    // 'hidden' hides it by default. 'lg:block' shows it on screens 1024px and wider.
                    className="hidden lg:block lg:col-span-4 bg-blue-500/5 border border-neutral-800 rounded-[2.5rem] relative overflow-hidden"
                >
                    <div className="absolute inset-0 z-0">
                        <ThreeWrapper />
                    </div>
                </motion.div>

                {/* 3. LOCATION BOX */}
                <div className="col-span-1 lg:col-span-4 bg-neutral-900/40 border border-neutral-800 rounded-[2.5rem] p-8">
                    <p className="text-neutral-500 text-xs font-mono uppercase mb-2">Based In</p>
                    <h3 className="text-2xl text-white font-bold">Bengaluru, KA</h3>
                </div>

                {/* 4. AVAILABILITY BOX */}
                <div className="col-span-1 md:col-span-2 lg:col-span-8 bg-neutral-900/40 border border-neutral-800 rounded-[2.5rem] p-8 flex items-center justify-between">
                    <div>
                        <p className="text-neutral-500 text-xs font-mono uppercase mb-2">Availability</p>
                        <h3 className="text-lg md:text-xl text-white font-semibold">Open for Research Roles</h3>
                    </div>
                    <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                        <div className="h-2 w-2 rounded-full bg-blue-500 animate-ping" />
                    </div>
                </div>
            </div>
        </section>
    )
}