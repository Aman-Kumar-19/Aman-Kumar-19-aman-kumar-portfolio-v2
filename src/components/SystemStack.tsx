'use client'

import { Float } from '@react-three/drei'

// Define Three.js primitives as 'any' to bypass strict JSX checks during build
const Mesh = 'mesh' as any;
const BoxGeometry = 'boxGeometry' as any;
const MeshStandardMaterial = 'meshStandardMaterial' as any;
const Group = 'group' as any;

type LayerProps = {
    position: [number, number, number]
    color: string
    opacity?: number
}

function Layer({
                   position,
                   color,
                   opacity = 1,
               }: LayerProps) {
    return (
        <Float speed={1.2} floatIntensity={0.35}>
            <Mesh position={position} castShadow receiveShadow>
                <BoxGeometry args={[3, 0.25, 3]} />
                <MeshStandardMaterial
                    color={color}
                    roughness={0.3}
                    metalness={0.5}
                    transparent={opacity < 1}
                    opacity={opacity}
                />
            </Mesh>
        </Float>
    )
}

export function SystemStack() {
    return (
        <Group>
            {/* Hardware Layer */}
            <Layer position={[0, -1.3, 0]} color="#0f172a" />
            {/* Logic Layer */}
            <Layer position={[0, 0, 0]} color="#3b82f6" opacity={0.9} />
            {/* UI/Interface Layer */}
            <Layer position={[0, 1.3, 0]} color="#60a5fa" opacity={0.8} />
        </Group>
    )
}

export default SystemStack;