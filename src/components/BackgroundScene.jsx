import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

function FloatingParticles() {
    const ref = useRef();
    const sphere = random.inSphere(new Float32Array(2000), { radius: 2.5 });

    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 20;
        ref.current.rotation.y -= delta / 30;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color="#7C6CF2"
                    size={0.005}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.4}
                />
            </Points>
        </group>
    );
}

function GeometricShapes() {
    const groupRef = useRef();
    const sphereRef = useRef();
    const cubeRef = useRef();
    const ringRef = useRef();

    useFrame((state, delta) => {
        groupRef.current.rotation.y += delta * 0.05;

        if (sphereRef.current) {
            sphereRef.current.rotation.x += delta * 0.1;
            sphereRef.current.rotation.y += delta * 0.15;
        }

        if (cubeRef.current) {
            cubeRef.current.rotation.x -= delta * 0.1;
            cubeRef.current.rotation.y -= delta * 0.2;
        }

        if (ringRef.current) {
            ringRef.current.rotation.x += delta * 0.05;
            ringRef.current.rotation.y -= delta * 0.05;
        }
    });

    return (
        <group ref={groupRef}>
            <mesh ref={sphereRef} position={[-2, 1, -2]}>
                <sphereGeometry args={[0.3, 32, 32]} />
                <meshStandardMaterial color="#7C6CF2" opacity={0.15} transparent wireframe />
            </mesh>

            <mesh ref={cubeRef} position={[2, -1, -3]}>
                <boxGeometry args={[0.5, 0.5, 0.5]} />
                <meshStandardMaterial color="#6B6B6B" opacity={0.1} transparent />
            </mesh>

            <mesh ref={ringRef} position={[0, 0, -5]}>
                <torusGeometry args={[1.5, 0.02, 16, 100]} />
                <meshStandardMaterial color="#7C6CF2" opacity={0.2} transparent />
            </mesh>
        </group>
    );
}

export default function BackgroundScene() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none w-full h-full opacity-60">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <FloatingParticles />
                <GeometricShapes />
            </Canvas>
        </div>
    );
}
