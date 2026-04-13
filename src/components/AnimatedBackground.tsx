"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float } from "@react-three/drei";
import * as THREE from "three";

function FloatingParticles({ count = 200 }) {
  const mesh = useRef<THREE.Points>(null);
  
  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
      
      colors[i * 3] = 0.5 + Math.random() * 0.5;
      colors[i * 3 + 1] = 0.2 + Math.random() * 0.3;
      colors[i * 3 + 2] = 1;
    }
    
    return { positions, colors };
  }, [count]);

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = state.clock.getElapsedTime() * 0.02;
      mesh.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.05) * 0.1;
    }
  });

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(particles.positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(particles.colors, 3));
    return geo;
  }, [particles]);

  return (
    <points ref={mesh} geometry={geometry}>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
}

function AnimatedOrbs() {
  const orb1Ref = useRef<THREE.Mesh>(null);
  const orb2Ref = useRef<THREE.Mesh>(null);
  const orb3Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (orb1Ref.current) {
      orb1Ref.current.position.x = Math.sin(time * 0.5) * 5;
      orb1Ref.current.position.y = Math.cos(time * 0.3) * 3;
    }
    
    if (orb2Ref.current) {
      orb2Ref.current.position.x = Math.cos(time * 0.4) * 6;
      orb2Ref.current.position.y = Math.sin(time * 0.6) * 4;
    }
    
    if (orb3Ref.current) {
      orb3Ref.current.position.x = Math.sin(time * 0.3) * 4;
      orb3Ref.current.position.y = Math.cos(time * 0.4) * 5;
    }
  });

  return (
    <>
      <mesh ref={orb1Ref}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshBasicMaterial color="#8b5cf6" transparent opacity={0.3} />
      </mesh>
      <mesh ref={orb2Ref}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshBasicMaterial color="#3b82f6" transparent opacity={0.2} />
      </mesh>
      <mesh ref={orb3Ref}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial color="#ec4899" transparent opacity={0.3} />
      </mesh>
    </>
  );
}

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <color attach="background" args={["#0a0a0f"]} />
        <fog attach="fog" args={["#0a0a0f", 10, 50]} />
        
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 10, 5]} intensity={0.5} />
        <pointLight position={[-10, -10, -10]} color="#8b5cf6" intensity={0.5} />
        
        <Stars
          radius={100}
          depth={50}
          count={1000}
          factor={4}
          saturation={0.5}
          fade
          speed={0.5}
        />
        
        <FloatingParticles count={150} />
        <AnimatedOrbs />
      </Canvas>
    </div>
  );
}
