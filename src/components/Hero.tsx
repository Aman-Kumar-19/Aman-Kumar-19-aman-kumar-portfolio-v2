'use client'

import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import { motion } from 'framer-motion'
import { useEffect, useMemo } from 'react'
import SystemStack from './SystemStack'

export default function Hero() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' })
    }, [])

    const CanvasScene = useMemo(() => (
        <Canvas
            // alpha: true ensures the background isn't a solid color blocking your text
            gl={{ alpha: true, antialias: true }}
            camera={{ position: [0, 0, 6], fov: 45 }}
            dpr={[1, 1.5]}
        >
            <Environment preset="city" />
            <SystemStack />
        </Canvas>
    ), [])

    return (
        <section className="relative h-screen w-full bg-[#030303] overflow-hidden">
            {/* Background 3D Scene - Z-Index 0 */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {CanvasScene}
            </div>

            {/* Foreground Content - Z-Index 10 */}
            <div className="relative z-10 flex h-full items-center justify-center pointer-events-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="text-center px-6 max-w-4xl"
                >
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white drop-shadow-lg">
                        Building intelligent hardware systems
                    </h1>
                    <p className="mt-6 text-lg md:text-xl text-neutral-400 font-medium">
                        Specializing in embedded architectures, IoT infrastructure,
                        and real-time systems.
                    </p>

                    {/* Optional: Call to Action Button */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mt-10"
                    >
                        <a href="#projects" className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors">
                            View My Work
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}