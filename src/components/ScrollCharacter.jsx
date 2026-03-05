import React, { useRef, useLayoutEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls, Environment } from '@react-three/drei';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function BoyCharacter() {
    const groupRef = useRef();

    useFrame((state) => {
        // Idle floating/breathing animation
        const time = state.clock.getElapsedTime();
        groupRef.current.position.y += Math.sin(time * 2) * 0.001;
    });

    return (
        <group ref={groupRef}>
            {/* Body - stylized hoodie */}
            <mesh position={[0, -0.6, 0]}>
                <cylinderGeometry args={[0.35, 0.45, 0.9, 32]} />
                <meshStandardMaterial color="#1F1A3A" roughness={0.7} />
            </mesh>

            {/* Head */}
            <mesh position={[0, 0.2, 0]}>
                <sphereGeometry args={[0.3, 32, 32]} />
                <meshStandardMaterial color="#eecbaf" roughness={0.3} />
            </mesh>

            {/* Hair/Cap - stylized dark */}
            <mesh position={[0, 0.4, -0.05]}>
                <sphereGeometry args={[0.32, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
                <meshStandardMaterial color="#0F0A1F" />
            </mesh>

            {/* Eyes - simple stylized dots */}
            <mesh position={[-0.1, 0.25, 0.28]}>
                <sphereGeometry args={[0.03, 16, 16]} />
                <meshStandardMaterial color="#000000" />
            </mesh>
            <mesh position={[0.1, 0.25, 0.28]}>
                <sphereGeometry args={[0.03, 16, 16]} />
                <meshStandardMaterial color="#000000" />
            </mesh>

            {/* Spotlight/Glow below */}
            <mesh position={[0, -1.1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <circleGeometry args={[0.6, 32]} />
                <meshBasicMaterial color="#4CC9F0" transparent opacity={0.3} />
            </mesh>
        </group>
    );
}

export default function ScrollCharacter() {
    const canvasRef = useRef();
    const sceneRef = useRef();

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Hero section to About section transition
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: "#hero",
                    start: "top top",
                    endTrigger: "#about",
                    end: "bottom center",
                    scrub: 1,
                }
            });

            tl.fromTo(sceneRef.current.position,
                { x: 1.5, y: 0.5, z: 0 },
                { x: -1.5, y: -1.5, z: 1, duration: 2 }
            )
                .fromTo(sceneRef.current.rotation,
                    { y: -0.5, x: 0 },
                    { y: 0.5, x: 0.1, duration: 2 },
                    0
                )
                // Phase 2: Move out of way for Skills/Portfolio
                .to(sceneRef.current.position, {
                    y: -5,
                    opacity: 0,
                    duration: 1
                });
        });

        return () => ctx.revert();
    }, []);

    return (
        <div className="fixed inset-0 w-full h-screen pointer-events-none z-20">
            <Canvas
                shadows
                camera={{ position: [0, 0, 5], fov: 40 }}
                gl={{ antialias: true }}
                dpr={[1, 2]}
            >
                <Suspense fallback={null}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} intensity={1.5} color="#4361EE" />
                    <pointLight position={[-10, -5, 10]} intensity={1} color="#7209B7" />
                    <spotLight
                        position={[0, 5, 2]}
                        intensity={2}
                        angle={0.5}
                        penumbra={1}
                        color="#4CC9F0"
                    />

                    <group ref={sceneRef}>
                        <BoyCharacter />
                    </group>

                    <Environment preset="night" />
                </Suspense>
            </Canvas>
        </div>
    );
}
