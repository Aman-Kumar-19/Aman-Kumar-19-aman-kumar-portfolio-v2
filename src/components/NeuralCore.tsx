'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial, Float } from '@react-three/drei'

export default function NeuralCore() {
    const sphereRef = useRef<any>(null)

    useFrame((state) => {
        if (sphereRef.current) {
            sphereRef.current.rotation.y += 0.01
            sphereRef.current.rotation.z += 0.005
        }
    })

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <Sphere ref={sphereRef} args={[1, 64, 64]} scale={1.5}>
                <MeshDistortMaterial
                    color="#3b82f6"
                    attach="material"
                    distort={0.4}
                    speed={2}
                    roughness={0.2}
                    metalness={0.8}
                />
            </Sphere>
        </Float>
    )
}