import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from 'three';

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const anyya = useGLTF("./anya/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={anyya.scene}
        scale={isMobile ? 2 : 6.2}
        position={isMobile ? [0, -3, -2] : [0, -3.25, -4]}
        rotation={[-0.01, 0.8, -0.1]}
      />
    </mesh>
  );
};

const AnyaCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const rendererRef = useRef(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  useEffect(() => {
    const renderer = new THREE.WebGLRenderer();
    rendererRef.current = renderer;

    if (!renderer.domElement) {
      console.error("Renderer DOM element is null.");
      return;
    }

    const handleContextLost = (event) => {
      console.log('WebGL context lost', event);
      // Handle context lost event here
    };
    renderer.domElement.addEventListener('webglcontextlost', handleContextLost);

    const handleContextRestored = () => {
      console.log('WebGL context restored');
      // Handle context restored event here
    };
    renderer.domElement.addEventListener('webglcontextrestored', handleContextRestored);

    return () => {
      if (renderer.domElement) {
        renderer.domElement.removeEventListener('webglcontextlost', handleContextLost);
        renderer.domElement.removeEventListener('webglcontextrestored', handleContextRestored);
      }
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default AnyaCanvas;
