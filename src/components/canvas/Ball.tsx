import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Decal, Float, useTexture, OrbitControls, Preload } from '@react-three/drei';
import { Texture } from 'three';
import CanvasLoader from '../Loader';

// Props interface for icon image
interface BallProps {
  icon: string;
}

const BallCanvas: React.FC<BallProps> = ({ icon }) => {
  return (
    <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball icon={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

const Ball: React.FC<BallProps> = ({ icon }) => {
  const [decal] = useTexture([icon]) as [Texture]; // Cast to a tuple

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow rotation={[0, 0, 0]} scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1.6}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

export default BallCanvas;
