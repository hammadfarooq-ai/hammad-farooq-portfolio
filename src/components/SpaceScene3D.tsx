import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Animated Planet Component
function Planet({ position, color, size = 1, speed = 1 }: any) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.001 * speed;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <Sphere ref={meshRef} args={[size, 64, 64]} position={position}>
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={0.3}
        speed={2}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  );
}

// Floating Nebula Cloud
function NebulaCloud({ position, color, scale = 1 }: any) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z += 0.0005;
      meshRef.current.scale.x = scale + Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      meshRef.current.scale.y = scale + Math.cos(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[2, 32, 32]} />
      <meshBasicMaterial
        color={color}
        transparent
        opacity={0.15}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

// Asteroid Belt
function Asteroids() {
  const count = 50;
  const asteroids = useRef<THREE.Group>(null);
  
  useFrame(() => {
    if (asteroids.current) {
      asteroids.current.rotation.y += 0.0002;
    }
  });

  return (
    <group ref={asteroids}>
      {Array.from({ length: count }).map((_, i) => {
        const angle = (i / count) * Math.PI * 2;
        const radius = 15 + Math.random() * 5;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        const y = (Math.random() - 0.5) * 2;
        const size = 0.05 + Math.random() * 0.1;

        return (
          <mesh key={i} position={[x, y, z]}>
            <dodecahedronGeometry args={[size, 0]} />
            <meshStandardMaterial color="#8b8b8b" roughness={0.9} metalness={0.1} />
          </mesh>
        );
      })}
    </group>
  );
}

// Glowing Moon
function Moon() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.001;
    }
  });

  return (
    <group position={[8, 3, -5]}>
      <Sphere ref={meshRef} args={[1.5, 64, 64]}>
        <meshStandardMaterial
          color="#e0e0e0"
          emissive="#ffffff"
          emissiveIntensity={0.3}
          roughness={0.7}
        />
      </Sphere>
      <pointLight position={[0, 0, 0]} intensity={2} distance={10} color="#ffffff" />
    </group>
  );
}

export default function SpaceScene3D() {
  return (
    <div className="fixed inset-0 w-full h-full -z-10">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />

        {/* Star Field */}
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />

        {/* Planets */}
        <Planet position={[-5, 0, -8]} color="#8b5cf6" size={1.2} speed={1.5} />
        <Planet position={[6, -2, -10]} color="#3b82f6" size={0.8} speed={1} />
        <Planet position={[3, 3, -12]} color="#ec4899" size={0.6} speed={2} />
        <Planet position={[-8, -3, -15]} color="#06b6d4" size={0.9} speed={0.8} />

        {/* Moon */}
        <Moon />

        {/* Nebula Clouds */}
        <NebulaCloud position={[-10, 5, -20]} color="#8b5cf6" scale={3} />
        <NebulaCloud position={[12, -4, -25]} color="#3b82f6" scale={2.5} />
        <NebulaCloud position={[0, 8, -30]} color="#ec4899" scale={3.5} />
        <NebulaCloud position={[-15, -8, -28]} color="#06b6d4" scale={2.8} />

        {/* Asteroid Belt */}
        <Asteroids />

        {/* Camera Controls - Subtle auto-rotation */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.2}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}
