'use client'

import { Canvas } from '@react-three/fiber'
import { Environment, ContactShadows } from '@react-three/drei'
import IoTCore from './IoTCore'

// Define Three.js lighting primitives as 'any' to bypass strict JSX checks
const AmbientLight = 'ambientLight' as any;
const PointLight = 'pointLight' as any;

export default function ThreeWrapper() {
    return (
        <Canvas camera={{ position: [0, 0, 7], fov: 40 }} dpr={[1, 2]}>
            <AmbientLight intensity={0.4} />
            <PointLight position={[10, 10, 10]} intensity={1.5} />
            <IoTCore />
            <Environment preset="city" />
            <ContactShadows opacity={0.4} scale={10} blur={2} far={4.5} />
        </Canvas>
    )
}