'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

const ThreeWrapper = dynamic(() => import('./ThreeWrapper'), {
    ssr: false,
    loading: () => <div className="w-full h-full bg-blue-500/5 animate-pulse rounded-3xl" />
})

export default function Hero() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return <div className="h-screen bg-[#050505]" />

    return (
        <section className="min-h-screen w-full bg-[#050505] pt-28 pb-12 px-4 md:px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-6">

                {/* 1. MAIN IDENTITY - Spans 8 columns on large screens */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="lg:col-span-8 bg-neutral-900/40 border border-neutral-800 rounded-3xl p-8 md:p-12 flex flex-col justify-between backdrop-blur-md"
                >
                    <div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter">
                            Aman <span className="text-neutral-600 font-light italic">Kumar</span>
                        </h1>
                        <p className="mt-6 md:mt-8 text-xl md:text-2xl text-neutral-400 max-w-xl leading-relaxed">
                            Engineering <span className="text-white font-semibold">intelligent IoT systems</span>. Specializing in embedded architectures, IoT infrastructure, and real-time systems.
                        </p>
                    </div>

                    <div className="mt-10 flex flex-col sm:flex-row gap-4">
                        <a href="#projects" className="text-center px-10 py-4 bg-white text-black rounded-2xl font-bold hover:bg-blue-600 hover:text-white transition-all">
                            View Roadmap
                        </a>
                        <div className="flex items-center justify-center gap-4 px-6 py-4 bg-neutral-800/50 rounded-2xl border border-neutral-700/50">
                            <span className="text-xs font-mono text-neutral-400 uppercase">Python // RTOS // IoT</span>
                        </div>
                    </div>
                </motion.div>

                {/* 2. 3D VISUALIZATION - Dynamic height for mobile */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="lg:col-span-4 bg-blue-500/5 border border-neutral-800 rounded-3xl min-h-[350px] md:min-h-[450px] relative overflow-hidden"
                >
                    <div className="absolute inset-0 z-0">
                        <ThreeWrapper />
                    </div>
                </motion.div>

                {/* 3. LOCATION BOX */}
                <div className="lg:col-span-4 bg-neutral-900/40 border border-neutral-800 rounded-3xl p-8">
                    <p className="text-neutral-500 text-xs font-mono uppercase mb-2">Based In</p>
                    <h3 className="text-2xl text-white font-bold">Bengaluru, KA</h3>
                </div>

                {/* 4. AVAILABILITY BOX */}
                <div className="md:col-span-2 lg:col-span-8 bg-neutral-900/40 border border-neutral-800 rounded-3xl p-8 flex items-center justify-between">
                    <div>
                        <p className="text-neutral-500 text-xs font-mono uppercase mb-2">Availability</p>
                        <h3 className="text-xl text-white font-semibold">Open for Fall 26 Research & IoT Roles</h3>
                    </div>
                    <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <div className="h-2 w-2 rounded-full bg-blue-500 animate-ping" />
                    </div>
                </div>
            </div>
        </section>
    )
}