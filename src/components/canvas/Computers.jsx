import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import { Suspense, useState } from "react";
import * as THREE from "three";


const Stars = (props) => {
  const ref = useRef();

  // Generate random points within a sphere
  const generatePoints = () => {
    const spherePoints = random.inSphere(new Float32Array(5001), { radius: 1.2 });
    const validPoints = spherePoints.map((value) => (isNaN(value) ? 0 : value)); // Replace NaN with 0
    return validPoints;
  };

  const sphere = generatePoints();

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.003}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  const rendererRef = useRef(null);

  useEffect(() => {
    const renderer = new THREE.WebGLRenderer();
    rendererRef.current = renderer;

    if (!renderer.domElement) {
      console.error("Renderer DOM element is null.");
      return;
    }

    const handleContextLost = (event) => {
      console.log('WebGL context lost', event);
      // Handle WebGL context lost event
    };

    const handleContextRestored = () => {
      console.log('WebGL context restored');
      // Handle WebGL context restored event
    };

    const canvas = renderer.domElement;
    canvas.addEventListener('webglcontextlost', handleContextLost);
    canvas.addEventListener('webglcontextrestored', handleContextRestored);

    return () => {
      canvas.removeEventListener('webglcontextlost', handleContextLost);
      canvas.removeEventListener('webglcontextrestored', handleContextRestored);
    };
  }, []);

  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas
        camera={{ position: [0, 0, 1] }}
        onCreated={({ gl }) => {
          // Assign the renderer from useEffect to the context's renderer
          gl.domElement = rendererRef.current.domElement;
        }}
      >
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
