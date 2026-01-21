'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Box, Torus, Sphere, Float } from '@react-three/drei'
import * as THREE from 'three'

// Define Three.js primitives as 'any' to bypass strict JSX checks during build
const Group = 'group' as any;
const MeshStandardMaterial = 'meshStandardMaterial' as any;

export default function IoTCore() {
    const groupRef = useRef<THREE.Group>(null)

    useFrame(() => {
        if (groupRef.current) {
            groupRef.current.rotation.y += 0.005
            groupRef.current.rotation.z += 0.002
        }
    })

    return (
        <Group ref={groupRef}>
            <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
                {/* Central SoC / Processor */}
                <Box args={[1.4, 1.4, 0.4]}>
                    <MeshStandardMaterial color="#1e293b" metalness={0.9} roughness={0.1} />
                </Box>
                {/* Status LED */}
                <Sphere args={[0.15, 16, 16]} position={[0, 0, 0.25]}>
                    <MeshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={3} />
                </Sphere>
            </Float>

            {/* Communication Rings */}
            <Torus args={[2, 0.02, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
                <MeshStandardMaterial color="#3b82f6" transparent opacity={0.3} />
            </Torus>
            <Torus args={[2.4, 0.01, 16, 100]} rotation={[Math.PI / 4, Math.PI / 4, 0]}>
                <MeshStandardMaterial color="#6366f1" transparent opacity={0.2} />
            </Torus>

            {/* INCREASED FLOATING SENSOR NODES (Change 24 to your preferred number) */}
            {[...Array(24)].map((_, i) => (
                <Float
                    key={i}
                    speed={1 + Math.random() * 2}
                    position={[
                        Math.cos(i) * (2.5 + Math.random() * 1.5),
                        Math.sin(i) * (2 + Math.random() * 1.2),
                        (Math.random() - 0.5) * 2
                    ]}
                >
                    <Sphere args={[0.04 + Math.random() * 0.04, 8, 8]}>
                        <MeshStandardMaterial
                            color={i % 2 === 0 ? "#60a5fa" : "#818cf8"}
                            emissive={i % 2 === 0 ? "#60a5fa" : "#818cf8"}
                            emissiveIntensity={1.5}
                        />
                    </Sphere>
                </Float>
            ))}
        </Group>
    )
}