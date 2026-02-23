'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function NeuralNodes({ count = 120 }: { count?: number }) {
    const ref = useRef<THREE.Points>(null);
    const { mouse } = useThree();

    const [positions, connections] = useMemo(() => {
        const pos = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 14;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 8;
        }
        return [pos, null];
    }, [count]);

    useFrame((state) => {
        if (ref.current) {
            ref.current.rotation.y = state.clock.elapsedTime * 0.04 + mouse.x * 0.1;
            ref.current.rotation.x = state.clock.elapsedTime * 0.02 + mouse.y * 0.05;
        }
    });

    return (
        <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
            <PointMaterial
                transparent
                color="#3b82f6"
                size={0.06}
                sizeAttenuation={true}
                depthWrite={false}
                opacity={0.8}
            />
        </Points>
    );
}

function NeuralLines({ nodeCount = 60 }: { nodeCount?: number }) {
    const ref = useRef<THREE.LineSegments>(null);

    const geometry = useMemo(() => {
        const nodes: THREE.Vector3[] = [];
        for (let i = 0; i < nodeCount; i++) {
            nodes.push(
                new THREE.Vector3(
                    (Math.random() - 0.5) * 14,
                    (Math.random() - 0.5) * 10,
                    (Math.random() - 0.5) * 8
                )
            );
        }

        const linePositions: number[] = [];
        const maxDist = 3.5;
        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                if (nodes[i].distanceTo(nodes[j]) < maxDist) {
                    linePositions.push(nodes[i].x, nodes[i].y, nodes[i].z);
                    linePositions.push(nodes[j].x, nodes[j].y, nodes[j].z);
                }
            }
        }

        const geo = new THREE.BufferGeometry();
        geo.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
        return geo;
    }, [nodeCount]);

    useFrame((state) => {
        if (ref.current) {
            ref.current.rotation.y = state.clock.elapsedTime * 0.04;
            ref.current.rotation.x = state.clock.elapsedTime * 0.02;
        }
    });

    return (
        <lineSegments ref={ref} geometry={geometry}>
            <lineBasicMaterial color="#1d4ed8" transparent opacity={0.15} />
        </lineSegments>
    );
}

function FloatingSpheres() {
    const ref = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (ref.current) {
            ref.current.rotation.y = state.clock.elapsedTime * 0.08;
        }
    });

    return (
        <group ref={ref}>
            {[0, 1, 2, 3, 4].map((i) => {
                const angle = (i / 5) * Math.PI * 2;
                const r = 4;
                return (
                    <mesh key={i} position={[Math.cos(angle) * r, Math.sin(angle * 0.5) * 2, Math.sin(angle) * r]}>
                        <sphereGeometry args={[0.06, 8, 8]} />
                        <meshBasicMaterial color={i % 2 === 0 ? '#8b5cf6' : '#06b6d4'} />
                    </mesh>
                );
            })}
        </group>
    );
}

export default function NeuralNetworkBG() {
    return (
        <div className="absolute inset-0 z-0">
            <Canvas
                camera={{ position: [0, 0, 8], fov: 60 }}
                dpr={[1, 1.5]}
                gl={{ antialias: false, alpha: true }}
                style={{ background: 'transparent' }}
            >
                <NeuralNodes count={160} />
                <NeuralLines nodeCount={70} />
                <FloatingSpheres />
            </Canvas>
        </div>
    );
}
